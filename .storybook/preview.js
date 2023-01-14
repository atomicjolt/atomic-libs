import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssprops: {
    "primary100": { value:  "hsl(185, 96%, 94%)", category: "Global Colors", subcategory: "Primary"},
    "primary200": { value:  "hsl(186, 94%, 88%)", category: "Global Colors", subcategory: "Primary"},
    "primary300": { value:  "hsl(187, 92%, 75%)", category: "Global Colors", subcategory: "Primary"},
    "primary400": { value:  "hsl(188, 86%, 53%)", category: "Global Colors", subcategory: "Primary"},
    "primary500": { value:  "hsl(189, 94%, 43%)", category: "Global Colors", subcategory: "Primary"},
    "primary600": { value:  "hsl(190, 91%, 36%)", category: "Global Colors", subcategory: "Primary"},
    "primary700": { value:  "hsl(191, 82%, 31%)", category: "Global Colors", subcategory: "Primary"},
    "primary800": { value:  "hsl(192, 70%, 27%)", category: "Global Colors", subcategory: "Primary"},
    "primary900": { value:  "hsl(193, 64%, 24%)", category: "Global Colors", subcategory: "Primary"},
    "neutral50":  { value:  "hsl(0, 0%, 100%)",   category: "Global Colors", subcategory: "Neutral" },
    "neutral100": { value:  "hsl(220, 14%, 96%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral200": { value:  "hsl(220, 13%, 91%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral300": { value:  "hsl(216, 12%, 84%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral400": { value:  "hsl(218, 11%, 66%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral500": { value:  "hsl(220, 9%, 44%)",  category: "Global Colors", subcategory: "Neutral" },
    "neutral600": { value:  "hsl(215, 14%, 36%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral700": { value:  "hsl(217, 19%, 27%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral800": { value:  "hsl(215, 28%, 17%)", category: "Global Colors", subcategory: "Neutral" },
    "neutral900": { value:  "hsl(221, 39%, 11%)", category: "Global Colors", subcategory: "Neutral" },
    "error100":   { value:  "hsl(0, 93%, 94%)",   category: "Global Colors", subcategory: "Error" },
    "error200":   { value:  "hsl(0, 96%, 89%)",   category: "Global Colors", subcategory: "Error" },
    "error300":   { value:  "hsl(0, 94%, 82%)",   category: "Global Colors", subcategory: "Error" },
    "error400":   { value:  "hsl(0, 91%, 71%)",   category: "Global Colors", subcategory: "Error" },
    "error500":   { value:  "hsl(0, 84%, 60%)",   category: "Global Colors", subcategory: "Error" },
    "error600":   { value:  "hsl(0, 72%, 51%)",   category: "Global Colors", subcategory: "Error" },
    "error700":   { value:  "hsl(0, 74%, 42%)",   category: "Global Colors", subcategory: "Error" },
    "error800":   { value:  "hsl(0, 70%, 35%)",   category: "Global Colors", subcategory: "Error" },
    "error900":   { value:  "hsl(0, 63%, 31%)",   category: "Global Colors", subcategory: "Error" },
    "warning100": { value:  "hsl(55, 97%, 90%)",  category: "Global Colors", subcategory: "Warning" },
    "warning200": { value:  "hsl(53, 98%, 83%)",  category: "Global Colors", subcategory: "Warning" },
    "warning300": { value:  "hsl(50, 98%, 75%)",  category: "Global Colors", subcategory: "Warning" },
    "warning400": { value:  "hsl(48, 96%, 53%)",  category: "Global Colors", subcategory: "Warning" },
    "warning500": { value:  "hsl(45, 93%, 47%)",  category: "Global Colors", subcategory: "Warning" },
    "warning600": { value:  "hsl(41, 96%, 40%)",  category: "Global Colors", subcategory: "Warning" },
    "warning700": { value:  "hsl(35, 92%, 33%)",  category: "Global Colors", subcategory: "Warning" },
    "warning800": { value:  "hsl(32, 81%, 29%)",  category: "Global Colors", subcategory: "Warning" },
    "warning900": { value:  "hsl(28, 73%, 26%)",  category: "Global Colors", subcategory: "Warning" },
    "success100": { value:  "hsl(100, 89%, 89%)", category: "Global Colors", subcategory: "Success" },
    "success200": { value:  "hsl(101, 88%, 80%)", category: "Global Colors", subcategory: "Success" },
    "success300": { value:  "hsl(102, 85%, 67%)", category: "Global Colors", subcategory: "Success" },
    "success400": { value:  "hsl(103, 78%, 55%)", category: "Global Colors", subcategory: "Success" },
    "success500": { value:  "hsl(104, 81%, 44%)", category: "Global Colors", subcategory: "Success" },
    "success600": { value:  "hsl(105, 85%, 35%)", category: "Global Colors", subcategory: "Success" },
    "success700": { value:  "hsl(106, 78%, 27%)", category: "Global Colors", subcategory: "Success" },
    "success800": { value:  "hsl(107, 69%, 23%)", category: "Global Colors", subcategory: "Success" },
    "success900": { value:  "hsl(108, 61%, 20%)", category: "Global Colors", subcategory: "Success" },
  }
};

export const argTypes = {
  className: {
    control: 'text',
    table: {
      category: 'Common',
    }
  }
}

import "../src/components/index.scss";
import "../src/defines/fonts.scss";
import "../src/defines/variables.scss";