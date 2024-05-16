# Ejemplo de Tienda Online con Next.js y Wordpress para Marca de Ropa [Nineties Grove](https://www.ninetiesgrove.com/)

Este proyecto es una aplicación de tienda online para mi marca de ropa desarrollada con Next.js para el front-end y WordPress para el backend. Utiliza la API de WordPress para gestionar el contenido y los productos de la tienda.

## Características

-   **Front-end en Next.js:** La interfaz de usuario de la tienda está construida con Next.js, que ofrece un enfoque moderno y eficiente para el desarrollo de aplicaciones web.
    
-   **Backend en WordPress:** WordPress se utiliza como backend para administrar el contenido de la tienda, incluidos los productos, categorías, páginas, etc.
    
-   **Integración con la API de WordPress:** Se utiliza la API REST de WordPress para obtener y gestionar los datos de la tienda desde el front-end de Next.js.
    
-   **Funcionalidades de una Tienda Online:** Incluye funcionalidades típicas de una tienda online, como la visualización de productos, búsqueda, filtrado, carrito de compras y proceso de pago.

## Ejecutar proyecto

Para levantar el proyecto sigue los siguientes pasos:

1. **Clona el Repositorio**: Utiliza el comando `git clone` para clonar el repositorio del proyecto en tu terminal:

```bash
git clone <url_del_repositorio>
```

2.  **Navega al Directorio del Proyecto**: Una vez que hayas clonado el repositorio, navega al directorio del proyecto utilizando el siguiente comando:

```bash
cd nombre_del_directorio
```

3.  **Instala las Dependencias**: Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm install
```

4.  **Setear variables de entorno**:  Abre el archivo `.env.local` y configura las variables de entorno:

```bash
NEXT_PUBLIC_WORDPRESS_SITE_URL=
WOOCOMMERCE_KEY=
WOOCOMMERCE_SECRET=
DROP1_CATEGORY_ID=
AUTH_SECRET=

# Paypal
# https://developer.paypal.com/dashboard/
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
PAYPAL_SECRET=
# POST
PAYPAL_OAUTH_URL=
#GET
PAYPAL_ORDERS_URL=
```

5.  **Iniciar aplicación**: Para iniciar el proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm run dev
```