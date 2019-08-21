import React from 'react'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";

import { DetailProductsTest } from '../../components/detailProduct';

configure({ adapter: new Adapter() });

const renderdetailProducts = () => {
  const props = {
    getProducts: jest.fn(),
    getProductsDetailsDescription: jest.fn(),
    detailProducts: {
        "id":"MLA771186525",
        "site_id":"MLA",
        "title":"iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
        "subtitle":null,
        "seller_id":333535949,
        "category_id":"MLA1055",
        "official_store_id":null,
        "price":39989.99,
        "base_price":39989.99,
        "original_price":null,
        "currency_id":"ARS",
        "initial_quantity":102,
        "available_quantity":1,
        "sold_quantity":40,
        "sale_terms":[  
           {  
              "id":"WARRANTY_TIME",
              "name":"Tiempo de garantía",
              "value_id":null,
              "value_name":"90 días",
              "value_struct":{  
                 "number":90,
                 "unit":"días"
              }
           },
           {  
              "id":"WARRANTY_TYPE",
              "name":"Tipo de garantía",
              "value_id":"2230280",
              "value_name":"Garantía del vendedor",
              "value_struct":null
           }
        ],
        "buying_mode":"buy_it_now",
        "listing_type_id":"gold_special",
        "start_time":"2019-02-15T17:47:30.000Z",
        "stop_time":"2039-02-10T04:00:00.000Z",
        "condition":"new",
        "permalink":"https://articulo.mercadolibre.com.ar/MLA-771186525-iphone-7-apple-32gb-sellado-libre-original-gtia-templado-_JM",
        "thumbnail":"http://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-I.jpg",
        "secure_thumbnail":"https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-I.jpg",
        "pictures":[  
           {  
              "id":"751692-MLA31081757564_062019",
              "url":"http://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
              "secure_url":"https://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-O.jpg",
              "size":"400x500",
              "max_size":"791x988",
              "quality":""
           },
           {  
              "id":"798942-MLA31081758034_062019",
              "url":"http://mla-s2-p.mlstatic.com/798942-MLA31081758034_062019-O.jpg",
              "secure_url":"https://mla-s2-p.mlstatic.com/798942-MLA31081758034_062019-O.jpg",
              "size":"400x500",
              "max_size":"791x988",
              "quality":""
           },
           {  
              "id":"990524-MLA31081752742_062019",
              "url":"http://mla-s2-p.mlstatic.com/990524-MLA31081752742_062019-O.jpg",
              "secure_url":"https://mla-s2-p.mlstatic.com/990524-MLA31081752742_062019-O.jpg",
              "size":"402x500",
              "max_size":"792x984",
              "quality":""
           },
           {  
              "id":"863714-MLA31081749334_062019",
              "url":"http://mla-s2-p.mlstatic.com/863714-MLA31081749334_062019-O.jpg",
              "secure_url":"https://mla-s2-p.mlstatic.com/863714-MLA31081749334_062019-O.jpg",
              "size":"402x500",
              "max_size":"792x984",
              "quality":""
           }
        ],
        "video_id":null,
        "descriptions":[  
           {  
              "id":"MLA771186525-1982496807"
           }
        ],
        "accepts_mercadopago":true,
        "non_mercado_pago_payment_methods":[  
     
        ],
        "shipping":{  
           "mode":"me2",
           "free_methods":[  
              {  
                 "id":73328,
                 "rule":{  
                    "default":true,
                    "free_mode":"country",
                    "free_shipping_flag":true,
                    "value":null
                 }
              }
           ],
           "tags":[  
              "mandatory_free_shipping"
           ],
           "dimensions":null,
           "local_pick_up":true,
           "free_shipping":true,
           "logistic_type":"drop_off",
           "store_pick_up":false
        },
        "international_delivery_mode":"none",
        "seller_address":{  
           "city":{  
              "name":"Palermo Soho"
           },
           "state":{  
              "id":"AR-C",
              "name":"Capital Federal"
           },
           "country":{  
              "id":"AR",
              "name":"Argentina"
           },
           "search_location":{  
              "neighborhood":{  
                 "id":"TUxBQlBBTDg3MDda",
                 "name":"Palermo Soho"
              },
              "city":{  
                 "id":"TUxBQ0NBUGZlZG1sYQ",
                 "name":"Capital Federal"
              },
              "state":{  
                 "id":"TUxBUENBUGw3M2E1",
                 "name":"Capital Federal"
              }
           },
           "latitude":-34.59553,
           "longitude":-58.42941,
           "id":1023504541
        },
        "seller_contact":null,
        "location":{  
     
        },
        "geolocation":{  
           "latitude":-34.59553,
           "longitude":-58.42941
        },
        "coverage_areas":[  
     
        ],
        "attributes":[  
           {  
              "id":"MP3",
              "name":"MP3",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"",
              "attribute_group_name":""
           },
           {  
              "id":"BRAND",
              "name":"Marca",
              "value_id":"9344",
              "value_name":"Apple",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"CPU_MODEL",
              "name":"Modelo de CPU",
              "value_id":null,
              "value_name":"Apple A10",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"DISPLAY_RESOLUTION",
              "name":"Resolución de la pantalla",
              "value_id":null,
              "value_name":"1334 px - 750 px",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"DISPLAY_SIZE",
              "name":"Tamaño de la pantalla",
              "value_id":null,
              "value_name":"4.7 pulgadas",
              "value_struct":{  
                 "number":4.7,
                 "unit":"pulgadas"
              },
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"INTERNAL_MEMORY",
              "name":"Memoria interna",
              "value_id":null,
              "value_name":"32 GB",
              "value_struct":{  
                 "number":32,
                 "unit":"GB"
              },
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"IS_DUAL_SIM",
              "name":"Es Dual SIM",
              "value_id":"242084",
              "value_name":"No",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"ITEM_CONDITION",
              "name":"Condición del ítem",
              "value_id":"2230284",
              "value_name":"Nuevo",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"LINE",
              "name":"Línea",
              "value_id":"58993",
              "value_name":"iPhone",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"MAIN_REAR_CAMERA_RESOLUTION",
              "name":"Resolución de la cámara trasera principal",
              "value_id":"7199628",
              "value_name":"12 Mpx",
              "value_struct":{  
                 "number":12,
                 "unit":"Mpx"
              },
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"MODEL",
              "name":"Modelo",
              "value_id":"312155",
              "value_name":"iPhone 7",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"OPERATING_SYSTEM_NAME",
              "name":"Nombre del sistema operativo",
              "value_id":"7404961",
              "value_name":"iOS",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"OPERATING_SYSTEM_VERSION",
              "name":"Versión del sistema operativo",
              "value_id":"4743197",
              "value_name":"10",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"RAM",
              "name":"Memoria RAM",
              "value_id":null,
              "value_name":"2 GB",
              "value_struct":{  
                 "number":2,
                 "unit":"GB"
              },
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"SCREEN_TECHNOLOGY",
              "name":"Tecnología de pantalla",
              "value_id":"80490",
              "value_name":"IPS",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"SIM_SIZES",
              "name":"Tamaños de tarjeta SIM compatibles",
              "value_id":"80453",
              "value_name":"Nano-SIM",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WEIGHT",
              "name":"Peso",
              "value_id":"522902",
              "value_name":"138 g",
              "value_struct":{  
                 "number":138,
                 "unit":"g"
              },
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_BLUETOOTH",
              "name":"Con Bluetooth",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_CAMERA",
              "name":"Con cámara",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_ESIM",
              "name":"Con eSIM",
              "value_id":"242084",
              "value_name":"No",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_GPS",
              "name":"Con GPS",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_GYROSCOPE",
              "name":"Con giroscopio",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_IMEI",
              "name":"Con IMEI",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_RADIO",
              "name":"Con radio",
              "value_id":"242084",
              "value_name":"No",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_SLOW_MOTION_CAMERA_FUNCTION",
              "name":"Con función de cámara lenta",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_TOUCH_SCREEN",
              "name":"Con pantalla táctil",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_TV_TUNER",
              "name":"Con sintonizador de TV",
              "value_id":"242084",
              "value_name":"No",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           },
           {  
              "id":"WITH_WIFI",
              "name":"Con Wi-Fi",
              "value_id":"242085",
              "value_name":"Sí",
              "value_struct":null,
              "attribute_group_id":"OTHERS",
              "attribute_group_name":"Otros"
           }
        ],
        "warnings":[  
     
        ],
        "listing_source":"",
        "variations":[  
           {  
              "id":33068453069,
              "price":39989.99,
              "attribute_combinations":[  
                 {  
                    "id":"COLOR",
                    "name":"Color",
                    "value_id":"52049",
                    "value_name":"Negro",
                    "value_struct":null
                 }
              ],
              "available_quantity":1,
              "sold_quantity":25,
              "sale_terms":[  
     
              ],
              "picture_ids":[  
                 "751692-MLA31081757564_062019"
              ],
              "catalog_product_id":"MLA6240112"
           },
           {  
              "id":33445668236,
              "price":39989.99,
              "attribute_combinations":[  
                 {  
                    "id":"COLOR",
                    "name":"Color",
                    "value_id":"283164",
                    "value_name":"Dorado",
                    "value_struct":null
                 }
              ],
              "available_quantity":0,
              "sold_quantity":5,
              "sale_terms":[  
     
              ],
              "picture_ids":[  
                 "990524-MLA31081752742_062019"
              ],
              "catalog_product_id":"MLA6240114"
           },
           {  
              "id":33068453066,
              "price":39989.99,
              "attribute_combinations":[  
                 {  
                    "id":"COLOR",
                    "name":"Color",
                    "value_id":"51994",
                    "value_name":"Rosa",
                    "value_struct":null
                 }
              ],
              "available_quantity":0,
              "sold_quantity":5,
              "sale_terms":[  
     
              ],
              "picture_ids":[  
                 "798942-MLA31081758034_062019"
              ],
              "catalog_product_id":"MLA6240112"
           },
           {  
              "id":33445668239,
              "price":39989.99,
              "attribute_combinations":[  
                 {  
                    "id":"COLOR",
                    "name":"Color",
                    "value_id":"52053",
                    "value_name":"Plateado",
                    "value_struct":null
                 }
              ],
              "available_quantity":0,
              "sold_quantity":5,
              "sale_terms":[  
     
              ],
              "picture_ids":[  
                 "863714-MLA31081749334_062019"
              ],
              "catalog_product_id":"MLA6240115"
           }
        ],
        "status":"active",
        "sub_status":[  
     
        ],
        "tags":[  
           "good_quality_thumbnail",
           "incomplete_technical_specs",
           "brand_verified",
           "extended_warranty_eligible",
           "good_quality_picture",
           "immediate_payment",
           "cart_eligible"
        ],
        "warranty":"Garantía del vendedor: 90 días",
        "catalog_product_id":"MLA6240112",
        "domain_id":"MLA-CELLPHONES",
        "parent_item_id":null,
        "differential_pricing":null,
        "deal_ids":[  
           "MLA2148"
        ],
        "automatic_relist":false,
        "date_created":"2019-02-15T17:47:30.000Z",
        "last_updated":"2019-08-21T11:00:48.000Z",
        "health":0.81,
        "catalog_listing":false
    } 
  };

  const DetailProducts = mount(
    <Router>
      <DetailProductsTest {...props} />
    </Router>
  );

  return DetailProducts;
};
describe('>>>DETAILPRODUCTS --- elements', () => {

  it('+++ should have Title', () => {
    const wrapper = renderdetailProducts();
    expect(wrapper.find('h4').text()).toEqual('iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado');
  });

  it('+++ should have Buy', () => {
    const wrapper = renderdetailProducts();
    expect(wrapper.find('button').text()).toEqual(' Comprar ');
  });

});