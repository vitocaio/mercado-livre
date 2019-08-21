import React from 'react'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";

import { ListProductsTest } from '../../components/listProducts';

configure({ adapter: new Adapter() });

const renderListProducts = () => {
  const props = {
    getProductsList: jest.fn(),
    search: null,
    products: {
      results: [
        {
          "id":"MLA771190469",
         "site_id":"MLA",
         "title":"iPhone 7 Plus 32gb Nuevos Libres Garantia Envios + Templado",
         "seller":{  
            "id":333535949,
            "power_seller_status":null,
            "car_dealer":false,
            "real_estate_agency":false,
            "tags":[  

            ]
         },
         "price":49989.99,
         "currency_id":"ARS",
         "available_quantity":1,
         "sold_quantity":25,
         "buying_mode":"buy_it_now",
         "listing_type_id":"gold_special",
         "stop_time":"2039-02-10T04:00:00.000Z",
         "condition":"new",
         "permalink":"https://articulo.mercadolibre.com.ar/MLA-771190469-iphone-7-plus-32gb-nuevos-libres-garantia-envios-templado-_JM",
         "thumbnail":"http://mla-s2-p.mlstatic.com/883111-MLA31024137304_062019-I.jpg",
         "accepts_mercadopago":true,
         "installments":{  
            "quantity":12,
            "amount":6822.38,
            "rate":63.77,
            "currency_id":"ARS"
         },
         "address":{  
            "state_id":"AR-C",
            "state_name":"Capital Federal",
            "city_id":null,
            "city_name":"Palermo Soho"
         },
         "shipping":{  
            "free_shipping":true,
            "mode":"me2",
            "tags":[  
               "mandatory_free_shipping"
            ],
            "logistic_type":"drop_off",
            "store_pick_up":false
         },
         "seller_address":{  
            "id":"",
            "comment":"",
            "address_line":"",
            "zip_code":"",
            "country":{  
               "id":"AR",
               "name":"Argentina"
            },
            "state":{  
               "id":"AR-C",
               "name":"Capital Federal"
            },
            "city":{  
               "id":null,
               "name":"Palermo Soho"
            },
            "latitude":"",
            "longitude":""
         },
         "attributes":[  
            {  
               "value_id":"9344",
               "value_name":"Apple",
               "value_struct":null,
               "attribute_group_id":"OTHERS",
               "attribute_group_name":"Otros",
               "source":6587939990796619,
               "id":"BRAND",
               "name":"Marca"
            },
            {  
               "name":"Modelo de CPU",
               "value_id":null,
               "value_name":"Apple A10",
               "value_struct":null,
               "attribute_group_id":"OTHERS",
               "attribute_group_name":"Otros",
               "source":6587939990796619,
               "id":"CPU_MODEL"
            },
            {  
               "name":"Condición del ítem",
               "value_id":"2230284",
               "value_name":"Nuevo",
               "value_struct":null,
               "attribute_group_id":"OTHERS",
               "attribute_group_name":"Otros",
               "source":1572,
               "id":"ITEM_CONDITION"
            },
            {  
               "attribute_group_id":"OTHERS",
               "attribute_group_name":"Otros",
               "source":6587939990796619,
               "id":"LINE",
               "name":"Línea",
               "value_id":"58993",
               "value_name":"iPhone",
               "value_struct":null
            },
            {  
               "id":"MODEL",
               "name":"Modelo",
               "value_id":"312157",
               "value_name":"iPhone 7 Plus",
               "value_struct":null,
               "attribute_group_id":"OTHERS",
               "attribute_group_name":"Otros",
               "source":6587939990796619
            }
         ],
         "original_price":null,
         "category_id":"MLA1055",
         "official_store_id":null,
         "catalog_product_id":"MLA6240128",
         "tags":[  
            "brand_verified",
            "extended_warranty_eligible",
            "good_quality_picture",
            "good_quality_thumbnail",
            "loyalty_discount_eligible",
            "immediate_payment",
            "cart_eligible"
         ]
        }
      ]
    } 
  };

  const ListProducts = mount(
    <Router>
      <ListProductsTest {...props} />
    </Router>
  );

  return ListProducts;
};
describe('>>>LISTPRODUCTS --- elements', () => {

  it('+++ should have thumbnail', () => {
    const wrapper = renderListProducts();
    expect(wrapper.find('img').at(1).props('src').src).toEqual('http://mla-s2-p.mlstatic.com/883111-MLA31024137304_062019-I.jpg');
  });

  it('+++ should have title', () => {
    const wrapper = renderListProducts();
    expect(wrapper.find('p').text()).toEqual('iPhone 7 Plus 32gb Nuevos Libres Garantia Envios + Templado');
  });

});