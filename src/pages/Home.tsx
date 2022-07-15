import { Flex, Text, Input, Stack, Button ,Link} from '@chakra-ui/react'

export function Login() {
    return (
        <Flex
            justify={'center'}
            w="100vw"
            h="100vh"
            align="center">
            <Flex
                as="form"
                width="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column">

                <Stack spacing='4'>
                    <Text>E-mail</Text>
                    <Input
                        type="email"

                    />
                    <Text>password</Text>
                    <Input
                        type="password"
                    />
                </Stack>
               <Flex justify={'center'}>
             
               <Button
                    type="submit"
                    mt="4"
                    color=""
                    bg='gray.300'
                >
                    Login
                </Button>
                <Link
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    ml='3'
                >
                   Forgot password ?

                </Link>
               </Flex>
            </Flex>
        </Flex>
    )

}