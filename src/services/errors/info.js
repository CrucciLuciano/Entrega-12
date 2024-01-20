export const generateUserErrorInfo = (user) => {
    return `Uno o mas campos estan incompletos o son invalidos
            Lista de Propiedades obligatorias:
                - first_name: Must be a string ${user?.first_name}
                - last_name: Must be a string ${user?.last_name}
                - email: Must be a string ${user?.email}`
}

export const generateRouteError = () => {
    return `La ruta a la que intentas ingresar no se encuentra`
}