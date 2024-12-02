import { Theme, Flex, Text, Box, Card } from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <Box maxWidth="350px">
          <Card asChild>
            <div>
              <Text as="div" size="2" weight="bold">
                Quick start
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </div>
          </Card>
        </Box>
      </Flex>
    </Theme>
  )
}

export default App
