import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

import { GlassCard } from "../../components/Card";
import bgImg from "../../assets/img/woman-organizing-post-its.jpg";
import { getCyleDate } from "../../hooks/config/useGetCyleData";
import { Logo } from "../../components/Logo";
import { Ritual } from "../../components/Table";
import {
  getRituals,
  ParsedRitual,
  parseRituals,
} from "../../hooks/rituals/useRituals/useRituals";

const pseudoBase = {
  content: `""`,
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  zIndex: 0,
};

const Home = ({ rituals }: { rituals: ParsedRitual[] }) => {
  const maxTopicLenght = rituals
    .flatMap(({ rows }) => rows.map((row) => row.columns[0].content.length))
    .reduce((acc, cur) => Math.max(acc, cur), 0);
  const pixelsPerChar = 10;

  return (
    <>
      <Head>
        <title>Rituals.com - Listagem de Rituais</title>
      </Head>
      <Box
        bgColor="brand.800"
        _before={{
          ...pseudoBase,
          bgImage: bgImg.src,
          bgPosition: "right",
          bgRepeat: "no-repeat",
          opacity: "0.2",
        }}
        _after={{
          ...pseudoBase,
          maxW: "1194px",
          bg: `
          radial-gradient(circle, rgba(126,33,244,0.4) 7%, rgba(0,0,0,0) 35%) calc(100% - -550px) calc(100% - 450px) no-repeat,
          radial-gradient(circle, rgba(126,33,244,0.3) 25%, rgba(0,0,0,0) 60%) calc(100% - 370px) calc(100% - -460px) no-repeat
        `,
        }}
        h="100vh"
        w="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          h="100%"
          position="relative"
          zIndex="1"
        >
          <GlassCard
            maxW={["95%", "90%", "692px", "820px"]}
            minHeight="600px"
            color="white"
            flex="1"
            transform={[
              "translateX(0)",
              "translateX(0)",
              "translateX(0)",
              "translateX(0)",
              "translateX(-30%)",
            ]}
            p={["30px 20px", "90px 50px 50px"]}
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Logo />

            <Flex
              alignItems="center"
              justifyContent="space-between"
              mt={16}
              mb={5}
              py={2}
              borderBottom="1px solid #525F7F80"
            >
              <Text fontSize="20px" color="#525F7F">
                This week
              </Text>
            </Flex>

            {rituals.map((ritual) => (
              <Ritual
                mt={5}
                minTopicWidth={maxTopicLenght * pixelsPerChar}
                key={ritual.name}
                rows={ritual.rows}
                ritualId={ritual.id}
                ritualLink={ritual.link}
              />
            ))}
          </GlassCard>
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await getRituals();
  const startDate = getCyleDate({ cadence: "weekly", format: "MMM D" });
  const rituals = data?.map(parseRituals(startDate)) ?? [];

  return {
    props: {
      rituals,
      startDate,
    },
  };
};

export default Home;
