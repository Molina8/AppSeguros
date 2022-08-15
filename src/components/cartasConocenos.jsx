import {Heading,Text,Box,Stack, Divider} from '@chakra-ui/react'

export function Feature({ title, desc,size, ...rest }) {
    return (
        <Box p={5} shadow='xl' borderWidth='4px' {...rest} boxSize={size} bg='gray.100' >
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={3}>{desc}</Text>
        </Box>
    )
}

export function Cartas() {
    return (
        <Stack spacing={8} direction='row' m='10' >
            <Feature
                title='¿Quiénes somos?'
                desc='Nuestra correduría de seguros es un canal
                    de venta de seguros que actúa como intermediario
                    entre la entidad aseguradora y el asegurado.'
                size='50%'
            />
            <Divider orientation='vertical' />
            <Feature
                title='¿Cómo lo hacemos?'
                desc='Puesto que no mantenemos ninguna vinculación directa con ninguna compañía,
                    ofrecemos un asesoramiento independiente y personalizado al asegurado, es decir,
                    nos centramos en las necesidades del consumidor.'
                size='50%'
            />
        </Stack>
    )
}

