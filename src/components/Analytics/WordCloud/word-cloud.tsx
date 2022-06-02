import { Box, Heading } from "@chakra-ui/react";
import { TagCloud } from "react-tagcloud";

import { getTagsFromPhrases } from "./get-tags-from-phrases";

const options = {
  luminosity: "light",
  hue: "#6F6EFF",
};

const data = [
  { value: "jQuery", count: 25 },
  { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 },
  { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 },
  { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 },
  { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 },
  { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 },
  { value: "NPM", count: 11 },
];

export interface WordCloudProps {
  title: string;
  phrases: string[];
}

export const WordCloud = ({ title, phrases }: WordCloudProps) => {
  const tags = getTagsFromPhrases(phrases);

  return (
    <Box bgColor="#525F7F4D" p="40px" borderRadius="10px" mt={7}>
      <Box borderBottom="1px solid #525F7F" pb={2} mb={4}>
        <Heading fontSize="18px" fontWeight={500} color="white">
          {title}
        </Heading>
      </Box>

      <Box maxWidth="80%" textAlign="center" margin="30px auto 0">
        <TagCloud
          colorOptions={options}
          minSize={20}
          tags={tags}
          maxSize={55}
        />
      </Box>
    </Box>
  );
};
