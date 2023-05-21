

const AccountData = [
    {
        id: 1,
        user_name: "leo-oh",
        name: "Leonardo Daniel Montiel Martinez",
        email: "leonardo.m2349@gmail.com",
        delivery_address: [
            {

                id: 1,
                name: "Facturacion principal",
                country: "Mexico",
                telephone: "234 456 78 34",
                address: "Calle 1 Avenida ",
                city: "Cordoba",
                estate: "Veracruz",
                cp: "090909"
            },
            {
                id: 2,
                name: "Dirección secundaria",
                telephone: "234 456 78 34",
                address: "Calle 2 Avenida 2",
            },
            {
                id: 3,
                name: "Dirección de la oficina",
                telephone: "234 456 78 34",
                address: "Calle 3 Avenida 3",
            }
        ],
        order_list: [
            {
                id: 1,
                name: "Xbox control",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 1290.0,
                quantity: 1,
                url_img: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984261392l.jpg",
                delivery_address_id: 1,
                date_of_purchase: "10/04/2023 15:30",
                delivery_date: "11/04/2023 12:30",
                status: "en proceso de devolución"

            },
            {
                id: 2,
                name: "Smart TV",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 5432.0,
                quantity: 1,
                url_img: "https://images.samsung.com/is/image/samsung/mx-full-hd-t5300-un43t5300afxzx-frontblack-234815390?$650_519_PNG$",
                delivery_address_id: 2,
                date_of_purchase: "11/04/2023 15:30",
                delivery_date: "12/04/2023 12:30",
                status: "en proceso de devolución"

            },
            {
                id: 3,
                name: "PC gamer",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://cdn.shopify.com/s/files/1/0437/8358/5942/products/514f295a-3781-4551-a26e-0062bd847e9e_800x.png?v=1681628633",
                delivery_address_id: 1,
                date_of_purchase: "12/04/2023 12:30",
                delivery_date: "12/04/2023 12:30",
                status: "entregado"
            },
            {
                id: 4,
                name: "Audifonos inalambricos",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://http2.mlstatic.com/D_NQ_NP_755743-MLA41523503764_042020-O.jpg",
                delivery_address_id: 1,
                date_of_purchase: "13/04/2023 12:30",
                delivery_date: "14/04/2023 12:30",
                status: "entregado"
            },
            {
                id: 5,
                name: "Google ChromeCast",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://m.media-amazon.com/images/I/6178uWwNfUL._AC_SY355_.jpg",
                delivery_address_id: 1,
                date_of_purchase: "14/04/2023 12:30",
                delivery_date: "15/04/2023 12:30",
                status: "en proceso de entrega"
            },
            {
                id: 6,
                name: "Mouse gamer",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://cdn.shopify.com/s/files/1/0016/1814/9465/products/lg1_8ed0de31-d0cf-4c63-9c8c-ee2a1d34b447_1211x700.jpg?v=1657910300",
                delivery_address_id: 1,
                date_of_purchase: "15/04/2023 12:30",
                delivery_date: "16/04/2023 12:30",
                status: "en proceso de entrega"
            },
            {
                id: 7,
                name: "Silla gamer",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://www.log-on.com.mx/storage/products/l07502312683818/07502312683818-1.jpg",
                delivery_address_id: 1,
                date_of_purchase: "16/04/2023 12:30",
                delivery_date: "17/04/2023 12:30",
                status: "devuelto"
            },
            {
                id: 8,
                name: "Mousepad gamer",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
                price: 21456.99,
                quantity: 1,
                url_img: "https://cdn.shopify.com/s/files/1/0540/9354/5643/products/MousepadGamerRGB.jpg?v=1616430770",
                delivery_address_id: 1,
                date_of_purchase: "17/04/2023 12:30",
                delivery_date: "18/04/2023 12:30",
                status: "devuelto"
            }
        ],
        bills_data: [
            {
                id: 1,
                persona: "Persona fisica",
                name: "Facturacion principal",
                razon: "Daniela Espinosa",
                rfc: "XXXX0000XX0",
                telephone: "234 456 78 34",
                address: "Calle 1 Avenida ",
                city: "Cordoba",
                estate: "Veracruz",
                cp: "090909",
                regimen: "Sin obligaciones fiscales",
                cfdi: "Pagos",
                pago: "efectivo",
                email: "correo@mail.com"

            }, {
                id: 2,
                persona: "Persona moral",
                name: "Facturacion empresa",
                razon: "Starlight ",
                rfc: "XXXX0000XX0",
                telephone: "234 456 78 34",
                address: "Calle 1 Avenida ",
                city: "Cordoba",
                estate: "Veracruz",
                cp: "09090",
                regimen: "Régimen General",
                cfdi: "CFDI",
                pago: "efectivo",
                email: "correo@mail.com"

            },
        ]
    }
]



export default AccountData
