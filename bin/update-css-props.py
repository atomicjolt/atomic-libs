import os
import re

group_regex = re.compile(r"/\* # (.+) \*/")
category_regex = re.compile(r"/\* ## (.+) \*/")
subcategory_regex = re.compile(r"/\* ### (.+) \*/")
css_property_regex = re.compile(r"--(.+): (.+);( // .+)?")
props_regex = re.compile("const props = .+\n", re.MULTILINE)


def get_css_props(contents: list[str]) -> dict:
    group = None
    category = None
    subcategory = None

    props: dict = {}

    for line in contents:
        line = line.strip()
        if match := group_regex.match(line):
            group = match.groups()[0]
            group = group.replace(" ", "")
            category = None
            subcategory = None
        elif match := category_regex.match(line):
            category = match.groups()[0]
            subcategory = None
        elif match := subcategory_regex.match(line):
            subcategory = match.groups()[0]
        elif match := css_property_regex.match(line):
            name, value, comment = match.groups()
            comment = (comment[3:] if comment else "").strip()

            data = {"value": value, "description": comment}

            if category:
                data["category"] = category
            else:
                data["category"] = f"{group} Properties"

            if subcategory:
                data["subcategory"] = subcategory

            props.setdefault(group, {})[name] = data

    return props


def main() -> None:
    with open("src/styles/variables.ts", "r") as f:
        contents = f.readlines()

    props = get_css_props(contents)

    os.makedirs(".storybook/__generated__", exist_ok=True)
    with open(".storybook/__generated__/cssprops.generated.ts", "w") as f:
        f.write(f"export const cssprops = {props}")


main()
