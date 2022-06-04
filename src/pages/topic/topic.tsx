import { Box, Flex, Tag, Button, Container } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "../../components/Link";
import { Header } from "../../components/Header";
import { GlassCard } from "../../components/Card";
import headerImage from "../../assets/img/answer-header-banner.jpg";

import { Responses } from "./responses";
import { Analytics } from "./analytics";

const tabs = ["answers", "analytics"];

export const Topic = () => {
  const [activeTab, setActiveTab] = useState("answers");
  const { topicId } = useParams();
  const navigate = useNavigate();

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    navigate(`#${tab}`, { replace: true });
  };

  useEffect(() => {
    const { hash } = window.location;
    const tab = hash.replace("#", "").toLowerCase();

    if (tab && tabs.includes(tab) && tab !== activeTab) {
      changeTab(tab);
    }
  }, []);

  return (
    <>
      <Header backgroundImage={headerImage}>
        <Flex
          mt="60px"
          flexDir={["column", "row"]}
          alignItems={["flex-start", "center"]}
        >
          <Box
            bgColor="brand.300"
            p="0 20px"
            color="#0B0B1A"
            fontSize="28px"
            fontWeight={900}
          >
            Check-in
          </Box>

          <Flex mt={[4, 0]}>
            <Tag
              bgColor="brand.700"
              color="white"
              fontSize="12px"
              borderRadius="15px"
              p="2px 10px"
              ml={[0, 5]}
            >
              Once a Week
            </Tag>
            <Tag
              bgColor="brand.800"
              color="white"
              fontSize="12px"
              borderRadius="15px"
              p="2px 10px"
              ml={4}
            >
              Company
            </Tag>
          </Flex>
        </Flex>

        <Flex
          flexDir={["column-reverse", "row"]}
          alignItems={["flex-start", "center"]}
          justifyContent="space-between"
          mt={6}
        >
          <Flex>
            <Button
              variant="ghost"
              fontSize="20px"
              color={activeTab === "answers" ? "white" : "#525F7F"}
              borderColor={activeTab === "answers" ? "white" : "transparent"}
              p="20px 30px"
              onClick={() => changeTab("answers")}
            >
              Answers
            </Button>
            <Button
              variant="ghost"
              fontSize="20px"
              color={activeTab === "analytics" ? "white" : "#525F7F"}
              borderColor={activeTab === "analytics" ? "white" : "transparent"}
              ml={4}
              p="20px 30px"
              onClick={() => changeTab("analytics")}
            >
              Analytics
            </Button>
          </Flex>
          <Box width="100%" textAlign="right">
            <Link to="/">
              <Button
                leftIcon={<ArrowBackIcon transform="scale(1.3)" />}
                bgColor="#32304A"
                color="brand.300"
                fontWeight={500}
                p="10px 28px 10px 17px"
              >
                Back
              </Button>
            </Link>
          </Box>
        </Flex>
      </Header>
      <Box bgColor="brand.800" pb={12}>
        <Container
          maxWidth={["90%", "576px", "768px", "992px", "1300px", "1500px"]}
          p={0}
        >
          <GlassCard py={10}>
            <Container>
              {activeTab === "answers" && topicId && (
                <Responses ritualId={topicId} />
              )}
              {activeTab === "analytics" && topicId && (
                <Analytics ritualId={topicId} />
              )}
            </Container>
          </GlassCard>

          <Link
            to="/"
            style={{ display: "block", textAlign: "right", marginTop: 30 }}
          >
            <Button
              leftIcon={<ArrowBackIcon transform="scale(1.3)" />}
              bgColor="#32304A"
              color="brand.300"
              fontWeight={500}
              p="10px 28px 10px 17px"
            >
              Back
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};
