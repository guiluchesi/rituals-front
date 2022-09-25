import { Box, Heading } from "@chakra-ui/react";
import { TagCloud } from "react-tagcloud";

import { InternCard } from "../../Card";

import { getTagsFromPhrases } from "./get-tags-from-phrases";

const options = {
  luminosity: "light",
  hue: "#6F6EFF",
};

export interface WordCloudProps {
  title: string;
  phrases: string[];
}

export const WordCloud = ({ title, phrases }: WordCloudProps) => {
  const maxWords = 30;
  const tags = getTagsFromPhrases(phrases).slice(0, maxWords);

  return (
    <InternCard mt={7}>
      <Box borderBottom="1px solid #525F7F" pb={2} mb={4}>
        <Heading fontSize="18px" fontWeight={500} color="white">
          {title}
        </Heading>
      </Box>

      <Box maxWidth={["100%", "80%"]} textAlign="center" margin="30px auto 0">
        <TagCloud
          colorOptions={options}
          tags={tags}
          minSize={20}
          maxSize={55}
        />
      </Box>
    </InternCard>
  );
};
