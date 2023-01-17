import re

category_regex = re.compile(r"/\* # (.+) \*/")
subcategory_regex = re.compile(r"/\* ## (.+) \*/")
css_property_regex = re.compile(r"--(.+): (.+);")
props_regex = re.compile("const props = .+\n", re.MULTILINE)


def get_css_props(contents: list[str]) -> dict:
    category = None
    subcategory = None

    props: dict = {}

    for line in contents:
        line = line.strip()
        if match := category_regex.match(line):
            category = match.groups()[0]
            subcategory = None
        elif match := subcategory_regex.match(line):
            subcategory = match.groups()[0]
        elif match := css_property_regex.match(line):
            name, value = match.groups()

            data = {"value": value}

            if category:
                data["category"] = category
            if subcategory:
                data["subcategory"] = subcategory

            props[name] = data

    return props


def main() -> None:
    with open("src/defines/variables.scss", "r") as f:
        contents = f.readlines()

    props = get_css_props(contents)

    with open(".storybook/props.js", "w") as f:
        f.write(f"export default {props}")


main()
