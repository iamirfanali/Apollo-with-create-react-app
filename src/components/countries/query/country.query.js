import gql from 'graphql-tag';

export const COUNTRIES_QUERY = gql`
{
  countries{
    code
    name
  }
}
`;

export const COUNTRY_QUERY = gql`
query country($country_code: String){
  country (code: $country_code){
    name
    phone
    continent{
      name
    }
    currency
    languages{
      name
    }
    emoji
    emojiU
    states{
      name
    }
  }
}
`;