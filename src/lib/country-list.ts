import {i18n} from './i18n';

interface CountryType {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  code: string;
}

export const countryList: CountryType[] = [
  {name: 'Afghanistan', alpha2Code: 'AF', alpha3Code: 'AFG', code: '004'},
  {name: 'Albania', alpha2Code: 'AL', alpha3Code: 'ALB', code: '008'},
  {name: 'Algeria', alpha2Code: 'DZ', alpha3Code: 'DZA', code: '012'},
  {name: 'American Samoa', alpha2Code: 'AS', alpha3Code: 'ASM', code: '016'},
  {name: 'Andorra', alpha2Code: 'AD', alpha3Code: 'AND', code: '020'},
  {name: 'Angola', alpha2Code: 'AO', alpha3Code: 'AGO', code: '024'},
  {name: 'Anguilla', alpha2Code: 'AI', alpha3Code: 'AIA', code: '660'},
  {name: 'Antarctica', alpha2Code: 'AQ', alpha3Code: 'ATA', code: '010'},
  {
    name: 'Antigua and Barbuda',
    alpha2Code: 'AG',
    alpha3Code: 'ATG',
    code: '028',
  },
  {name: 'Argentina', alpha2Code: 'AR', alpha3Code: 'ARG', code: '032'},
  {name: 'Armenia', alpha2Code: 'AM', alpha3Code: 'ARM', code: '051'},
  {name: 'Aruba', alpha2Code: 'AW', alpha3Code: 'ABW', code: '533'},
  {name: 'Australia', alpha2Code: 'AU', alpha3Code: 'AUS', code: '036'},
  {name: 'Austria', alpha2Code: 'AT', alpha3Code: 'AUT', code: '040'},
  {name: 'Azerbaijan', alpha2Code: 'AZ', alpha3Code: 'AZE', code: '031'},
  {name: 'Bahamas (the)', alpha2Code: 'BS', alpha3Code: 'BHS', code: '044'},
  {name: 'Bahrain', alpha2Code: 'BH', alpha3Code: 'BHR', code: '048'},
  {name: 'Bangladesh', alpha2Code: 'BD', alpha3Code: 'BGD', code: '050'},
  {name: 'Barbados', alpha2Code: 'BB', alpha3Code: 'BRB', code: '052'},
  {name: 'Belarus', alpha2Code: 'BY', alpha3Code: 'BLR', code: '112'},
  {name: 'Belgium', alpha2Code: 'BE', alpha3Code: 'BEL', code: '056'},
  {name: 'Belize', alpha2Code: 'BZ', alpha3Code: 'BLZ', code: '084'},
  {name: 'Benin', alpha2Code: 'BJ', alpha3Code: 'BEN', code: '204'},
  {name: 'Bermuda', alpha2Code: 'BM', alpha3Code: 'BMU', code: '060'},
  {name: 'Bhutan', alpha2Code: 'BT', alpha3Code: 'BTN', code: '064'},
  {
    name: 'Bolivia (Plurinational State of)',
    alpha2Code: 'BO',
    alpha3Code: 'BOL',
    code: '068',
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    alpha2Code: 'BQ',
    alpha3Code: 'BES',
    code: '535',
  },
  {
    name: 'Bosnia and Herzegovina',
    alpha2Code: 'BA',
    alpha3Code: 'BIH',
    code: '070',
  },
  {name: 'Botswana', alpha2Code: 'BW', alpha3Code: 'BWA', code: '072'},
  {name: 'Bouvet Island', alpha2Code: 'BV', alpha3Code: 'BVT', code: '074'},
  {name: 'Brazil', alpha2Code: 'BR', alpha3Code: 'BRA', code: '076'},
  {
    name: 'British Indian Ocean Territory (the)',
    alpha2Code: 'IO',
    alpha3Code: 'IOT',
    code: '086',
  },
  {name: 'Brunei Darussalam', alpha2Code: 'BN', alpha3Code: 'BRN', code: '096'},
  {name: 'Bulgaria', alpha2Code: 'BG', alpha3Code: 'BGR', code: '100'},
  {name: 'Burkina Faso', alpha2Code: 'BF', alpha3Code: 'BFA', code: '854'},
  {name: 'Burundi', alpha2Code: 'BI', alpha3Code: 'BDI', code: '108'},
  {name: 'Cabo Verde', alpha2Code: 'CV', alpha3Code: 'CPV', code: '132'},
  {name: 'Cambodia', alpha2Code: 'KH', alpha3Code: 'KHM', code: '116'},
  {name: 'Cameroon', alpha2Code: 'CM', alpha3Code: 'CMR', code: '120'},
  {name: 'Canada', alpha2Code: 'CA', alpha3Code: 'CAN', code: '124'},
  {
    name: 'Cayman Islands (the)',
    alpha2Code: 'KY',
    alpha3Code: 'CYM',
    code: '136',
  },
  {
    name: 'Central African Republic (the)',
    alpha2Code: 'CF',
    alpha3Code: 'CAF',
    code: '140',
  },
  {name: 'Chad', alpha2Code: 'TD', alpha3Code: 'TCD', code: '148'},
  {name: 'Chile', alpha2Code: 'CL', alpha3Code: 'CHL', code: '152'},
  {name: 'China', alpha2Code: 'CN', alpha3Code: 'CHN', code: '156'},
  {name: 'Christmas Island', alpha2Code: 'CX', alpha3Code: 'CXR', code: '162'},
  {
    name: 'Cocos (Keeling) Islands (the)',
    alpha2Code: 'CC',
    alpha3Code: 'CCK',
    code: '166',
  },
  {name: 'Colombia', alpha2Code: 'CO', alpha3Code: 'COL', code: '170'},
  {name: 'Comoros (the)', alpha2Code: 'KM', alpha3Code: 'COM', code: '174'},
  {
    name: 'Congo (the Democratic Republic of the)',
    alpha2Code: 'CD',
    alpha3Code: 'COD',
    code: '180',
  },
  {name: 'Congo (the)', alpha2Code: 'CG', alpha3Code: 'COG', code: '178'},
  {
    name: 'Cook Islands (the)',
    alpha2Code: 'CK',
    alpha3Code: 'COK',
    code: '184',
  },
  {name: 'Costa Rica', alpha2Code: 'CR', alpha3Code: 'CRI', code: '188'},
  {name: 'Croatia', alpha2Code: 'HR', alpha3Code: 'HRV', code: '191'},
  {name: 'Cuba', alpha2Code: 'CU', alpha3Code: 'CUB', code: '192'},
  {name: 'Curaçao', alpha2Code: 'CW', alpha3Code: 'CUW', code: '531'},
  {name: 'Cyprus', alpha2Code: 'CY', alpha3Code: 'CYP', code: '196'},
  {name: 'Czechia', alpha2Code: 'CZ', alpha3Code: 'CZE', code: '203'},
  {name: "Côte d'Ivoire", alpha2Code: 'CI', alpha3Code: 'CIV', code: '384'},
  {name: 'Denmark', alpha2Code: 'DK', alpha3Code: 'DNK', code: '208'},
  {name: 'Djibouti', alpha2Code: 'DJ', alpha3Code: 'DJI', code: '262'},
  {name: 'Dominica', alpha2Code: 'DM', alpha3Code: 'DMA', code: '212'},
  {
    name: 'Dominican Republic (the)',
    alpha2Code: 'DO',
    alpha3Code: 'DOM',
    code: '214',
  },
  {name: 'Ecuador', alpha2Code: 'EC', alpha3Code: 'ECU', code: '218'},
  {name: 'Egypt', alpha2Code: 'EG', alpha3Code: 'EGY', code: '818'},
  {name: 'El Salvador', alpha2Code: 'SV', alpha3Code: 'SLV', code: '222'},
  {name: 'Equatorial Guinea', alpha2Code: 'GQ', alpha3Code: 'GNQ', code: '226'},
  {name: 'Eritrea', alpha2Code: 'ER', alpha3Code: 'ERI', code: '232'},
  {name: 'Estonia', alpha2Code: 'EE', alpha3Code: 'EST', code: '233'},
  {name: 'Eswatini', alpha2Code: 'SZ', alpha3Code: 'SWZ', code: '748'},
  {name: 'Ethiopia', alpha2Code: 'ET', alpha3Code: 'ETH', code: '231'},
  {
    name: 'Falkland Islands (the) [Malvinas]',
    alpha2Code: 'FK',
    alpha3Code: 'FLK',
    code: '238',
  },
  {
    name: 'Faroe Islands (the)',
    alpha2Code: 'FO',
    alpha3Code: 'FRO',
    code: '234',
  },
  {name: 'Fiji', alpha2Code: 'FJ', alpha3Code: 'FJI', code: '242'},
  {name: 'Finland', alpha2Code: 'FI', alpha3Code: 'FIN', code: '246'},
  {name: 'France', alpha2Code: 'FR', alpha3Code: 'FRA', code: '250'},
  {name: 'French Guiana', alpha2Code: 'GF', alpha3Code: 'GUF', code: '254'},
  {name: 'French Polynesia', alpha2Code: 'PF', alpha3Code: 'PYF', code: '258'},
  {
    name: 'French Southern Territories (the)',
    alpha2Code: 'TF',
    alpha3Code: 'ATF',
    code: '260',
  },
  {name: 'Gabon', alpha2Code: 'GA', alpha3Code: 'GAB', code: '266'},
  {name: 'Gambia (the)', alpha2Code: 'GM', alpha3Code: 'GMB', code: '270'},
  {name: 'Georgia', alpha2Code: 'GE', alpha3Code: 'GEO', code: '268'},
  {name: 'Germany', alpha2Code: 'DE', alpha3Code: 'DEU', code: '276'},
  {name: 'Ghana', alpha2Code: 'GH', alpha3Code: 'GHA', code: '288'},
  {name: 'Gibraltar', alpha2Code: 'GI', alpha3Code: 'GIB', code: '292'},
  {name: 'Greece', alpha2Code: 'GR', alpha3Code: 'GRC', code: '300'},
  {name: 'Greenland', alpha2Code: 'GL', alpha3Code: 'GRL', code: '304'},
  {name: 'Grenada', alpha2Code: 'GD', alpha3Code: 'GRD', code: '308'},
  {name: 'Guadeloupe', alpha2Code: 'GP', alpha3Code: 'GLP', code: '312'},
  {name: 'Guam', alpha2Code: 'GU', alpha3Code: 'GUM', code: '316'},
  {name: 'Guatemala', alpha2Code: 'GT', alpha3Code: 'GTM', code: '320'},
  {name: 'Guernsey', alpha2Code: 'GG', alpha3Code: 'GGY', code: '831'},
  {name: 'Guinea', alpha2Code: 'GN', alpha3Code: 'GIN', code: '324'},
  {name: 'Guinea-Bissau', alpha2Code: 'GW', alpha3Code: 'GNB', code: '624'},
  {name: 'Guyana', alpha2Code: 'GY', alpha3Code: 'GUY', code: '328'},
  {name: 'Haiti', alpha2Code: 'HT', alpha3Code: 'HTI', code: '332'},
  {
    name: 'Heard Island and McDonald Islands',
    alpha2Code: 'HM',
    alpha3Code: 'HMD',
    code: '334',
  },
  {name: 'Holy See (the)', alpha2Code: 'VA', alpha3Code: 'VAT', code: '336'},
  {name: 'Honduras', alpha2Code: 'HN', alpha3Code: 'HND', code: '340'},
  {name: 'Hong Kong', alpha2Code: 'HK', alpha3Code: 'HKG', code: '344'},
  {name: 'Hungary', alpha2Code: 'HU', alpha3Code: 'HUN', code: '348'},
  {name: 'Iceland', alpha2Code: 'IS', alpha3Code: 'ISL', code: '352'},
  {name: 'India', alpha2Code: 'IN', alpha3Code: 'IND', code: '356'},
  {name: 'Indonesia', alpha2Code: 'ID', alpha3Code: 'IDN', code: '360'},
  {
    name: 'Iran (Islamic Republic of)',
    alpha2Code: 'IR',
    alpha3Code: 'IRN',
    code: '364',
  },
  {name: 'Iraq', alpha2Code: 'IQ', alpha3Code: 'IRQ', code: '368'},
  {name: 'Ireland', alpha2Code: 'IE', alpha3Code: 'IRL', code: '372'},
  {name: 'Isle of Man', alpha2Code: 'IM', alpha3Code: 'IMN', code: '833'},
  {name: 'Israel', alpha2Code: 'IL', alpha3Code: 'ISR', code: '376'},
  {name: 'Italy', alpha2Code: 'IT', alpha3Code: 'ITA', code: '380'},
  {name: 'Jamaica', alpha2Code: 'JM', alpha3Code: 'JAM', code: '388'},
  {name: 'Japan', alpha2Code: 'JP', alpha3Code: 'JPN', code: '392'},
  {name: 'Jersey', alpha2Code: 'JE', alpha3Code: 'JEY', code: '832'},
  {name: 'Jordan', alpha2Code: 'JO', alpha3Code: 'JOR', code: '400'},
  {name: 'Kazakhstan', alpha2Code: 'KZ', alpha3Code: 'KAZ', code: '398'},
  {name: 'Kenya', alpha2Code: 'KE', alpha3Code: 'KEN', code: '404'},
  {name: 'Kiribati', alpha2Code: 'KI', alpha3Code: 'KIR', code: '296'},
  {
    name: "Korea (the Democratic People's Republic of)",
    alpha2Code: 'KP',
    alpha3Code: 'PRK',
    code: '408',
  },
  {
    name: 'Korea (the Republic of)',
    alpha2Code: 'KR',
    alpha3Code: 'KOR',
    code: '410',
  },
  {name: 'Kuwait', alpha2Code: 'KW', alpha3Code: 'KWT', code: '414'},
  {name: 'Kyrgyzstan', alpha2Code: 'KG', alpha3Code: 'KGZ', code: '417'},
  {
    name: "Lao People's Democratic Republic (the)",
    alpha2Code: 'LA',
    alpha3Code: 'LAO',
    code: '418',
  },
  {name: 'Latvia', alpha2Code: 'LV', alpha3Code: 'LVA', code: '428'},
  {name: 'Lebanon', alpha2Code: 'LB', alpha3Code: 'LBN', code: '422'},
  {name: 'Lesotho', alpha2Code: 'LS', alpha3Code: 'LSO', code: '426'},
  {name: 'Liberia', alpha2Code: 'LR', alpha3Code: 'LBR', code: '430'},
  {name: 'Libya', alpha2Code: 'LY', alpha3Code: 'LBY', code: '434'},
  {name: 'Liechtenstein', alpha2Code: 'LI', alpha3Code: 'LIE', code: '438'},
  {name: 'Lithuania', alpha2Code: 'LT', alpha3Code: 'LTU', code: '440'},
  {name: 'Luxembourg', alpha2Code: 'LU', alpha3Code: 'LUX', code: '442'},
  {name: 'Macao', alpha2Code: 'MO', alpha3Code: 'MAC', code: '446'},
  {name: 'Madagascar', alpha2Code: 'MG', alpha3Code: 'MDG', code: '450'},
  {name: 'Malawi', alpha2Code: 'MW', alpha3Code: 'MWI', code: '454'},
  {name: 'Malaysia', alpha2Code: 'MY', alpha3Code: 'MYS', code: '458'},
  {name: 'Maldives', alpha2Code: 'MV', alpha3Code: 'MDV', code: '462'},
  {name: 'Mali', alpha2Code: 'ML', alpha3Code: 'MLI', code: '466'},
  {name: 'Malta', alpha2Code: 'MT', alpha3Code: 'MLT', code: '470'},
  {
    name: 'Marshall Islands (the)',
    alpha2Code: 'MH',
    alpha3Code: 'MHL',
    code: '584',
  },
  {name: 'Martinique', alpha2Code: 'MQ', alpha3Code: 'MTQ', code: '474'},
  {name: 'Mauritania', alpha2Code: 'MR', alpha3Code: 'MRT', code: '478'},
  {name: 'Mauritius', alpha2Code: 'MU', alpha3Code: 'MUS', code: '480'},
  {name: 'Mayotte', alpha2Code: 'YT', alpha3Code: 'MYT', code: '175'},
  {name: 'Mexico', alpha2Code: 'MX', alpha3Code: 'MEX', code: '484'},
  {
    name: 'Micronesia (Federated States of)',
    alpha2Code: 'FM',
    alpha3Code: 'FSM',
    code: '583',
  },
  {
    name: 'Moldova (the Republic of)',
    alpha2Code: 'MD',
    alpha3Code: 'MDA',
    code: '498',
  },
  {name: 'Monaco', alpha2Code: 'MC', alpha3Code: 'MCO', code: '492'},
  {name: 'Mongolia', alpha2Code: 'MN', alpha3Code: 'MNG', code: '496'},
  {name: 'Montenegro', alpha2Code: 'ME', alpha3Code: 'MNE', code: '499'},
  {name: 'Montserrat', alpha2Code: 'MS', alpha3Code: 'MSR', code: '500'},
  {name: 'Morocco', alpha2Code: 'MA', alpha3Code: 'MAR', code: '504'},
  {name: 'Mozambique', alpha2Code: 'MZ', alpha3Code: 'MOZ', code: '508'},
  {name: 'Myanmar', alpha2Code: 'MM', alpha3Code: 'MMR', code: '104'},
  {name: 'Namibia', alpha2Code: 'NA', alpha3Code: 'NAM', code: '516'},
  {name: 'Nauru', alpha2Code: 'NR', alpha3Code: 'NRU', code: '520'},
  {name: 'Nepal', alpha2Code: 'NP', alpha3Code: 'NPL', code: '524'},
  {name: 'Netherlands (the)', alpha2Code: 'NL', alpha3Code: 'NLD', code: '528'},
  {name: 'New Caledonia', alpha2Code: 'NC', alpha3Code: 'NCL', code: '540'},
  {name: 'New Zealand', alpha2Code: 'NZ', alpha3Code: 'NZL', code: '554'},
  {name: 'Nicaragua', alpha2Code: 'NI', alpha3Code: 'NIC', code: '558'},
  {name: 'Niger (the)', alpha2Code: 'NE', alpha3Code: 'NER', code: '562'},
  {name: 'Nigeria', alpha2Code: 'NG', alpha3Code: 'NGA', code: '566'},
  {name: 'Niue', alpha2Code: 'NU', alpha3Code: 'NIU', code: '570'},
  {name: 'Norfolk Island', alpha2Code: 'NF', alpha3Code: 'NFK', code: '574'},
  {
    name: 'Northern Mariana Islands (the)',
    alpha2Code: 'MP',
    alpha3Code: 'MNP',
    code: '580',
  },
  {name: 'Norway', alpha2Code: 'NO', alpha3Code: 'NOR', code: '578'},
  {name: 'Oman', alpha2Code: 'OM', alpha3Code: 'OMN', code: '512'},
  {name: 'Pakistan', alpha2Code: 'PK', alpha3Code: 'PAK', code: '586'},
  {name: 'Palau', alpha2Code: 'PW', alpha3Code: 'PLW', code: '585'},
  {
    name: 'Palestine, State of',
    alpha2Code: 'PS',
    alpha3Code: 'PSE',
    code: '275',
  },
  {name: 'Panama', alpha2Code: 'PA', alpha3Code: 'PAN', code: '591'},
  {name: 'Papua New Guinea', alpha2Code: 'PG', alpha3Code: 'PNG', code: '598'},
  {name: 'Paraguay', alpha2Code: 'PY', alpha3Code: 'PRY', code: '600'},
  {name: 'Peru', alpha2Code: 'PE', alpha3Code: 'PER', code: '604'},
  {name: 'Philippines (the)', alpha2Code: 'PH', alpha3Code: 'PHL', code: '608'},
  {name: 'Pitcairn', alpha2Code: 'PN', alpha3Code: 'PCN', code: '612'},
  {name: 'Poland', alpha2Code: 'PL', alpha3Code: 'POL', code: '616'},
  {name: 'Portugal', alpha2Code: 'PT', alpha3Code: 'PRT', code: '620'},
  {name: 'Puerto Rico', alpha2Code: 'PR', alpha3Code: 'PRI', code: '630'},
  {name: 'Qatar', alpha2Code: 'QA', alpha3Code: 'QAT', code: '634'},
  {
    name: 'Republic of North Macedonia',
    alpha2Code: 'MK',
    alpha3Code: 'MKD',
    code: '807',
  },
  {name: 'Romania', alpha2Code: 'RO', alpha3Code: 'ROU', code: '642'},
  {
    name: 'Russian Federation (the)',
    alpha2Code: 'RU',
    alpha3Code: 'RUS',
    code: '643',
  },
  {name: 'Rwanda', alpha2Code: 'RW', alpha3Code: 'RWA', code: '646'},
  {name: 'Réunion', alpha2Code: 'RE', alpha3Code: 'REU', code: '638'},
  {name: 'Saint Barthélemy', alpha2Code: 'BL', alpha3Code: 'BLM', code: '652'},
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    alpha2Code: 'SH',
    alpha3Code: 'SHN',
    code: '654',
  },
  {
    name: 'Saint Kitts and Nevis',
    alpha2Code: 'KN',
    alpha3Code: 'KNA',
    code: '659',
  },
  {name: 'Saint Lucia', alpha2Code: 'LC', alpha3Code: 'LCA', code: '662'},
  {
    name: 'Saint Martin (French part)',
    alpha2Code: 'MF',
    alpha3Code: 'MAF',
    code: '663',
  },
  {
    name: 'Saint Pierre and Miquelon',
    alpha2Code: 'PM',
    alpha3Code: 'SPM',
    code: '666',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    alpha2Code: 'VC',
    alpha3Code: 'VCT',
    code: '670',
  },
  {name: 'Samoa', alpha2Code: 'WS', alpha3Code: 'WSM', code: '882'},
  {name: 'San Marino', alpha2Code: 'SM', alpha3Code: 'SMR', code: '674'},
  {
    name: 'Sao Tome and Principe',
    alpha2Code: 'ST',
    alpha3Code: 'STP',
    code: '678',
  },
  {name: 'Saudi Arabia', alpha2Code: 'SA', alpha3Code: 'SAU', code: '682'},
  {name: 'Senegal', alpha2Code: 'SN', alpha3Code: 'SEN', code: '686'},
  {name: 'Serbia', alpha2Code: 'RS', alpha3Code: 'SRB', code: '688'},
  {name: 'Seychelles', alpha2Code: 'SC', alpha3Code: 'SYC', code: '690'},
  {name: 'Sierra Leone', alpha2Code: 'SL', alpha3Code: 'SLE', code: '694'},
  {name: 'Singapore', alpha2Code: 'SG', alpha3Code: 'SGP', code: '702'},
  {
    name: 'Sint Maarten (Dutch part)',
    alpha2Code: 'SX',
    alpha3Code: 'SXM',
    code: '534',
  },
  {name: 'Slovakia', alpha2Code: 'SK', alpha3Code: 'SVK', code: '703'},
  {name: 'Slovenia', alpha2Code: 'SI', alpha3Code: 'SVN', code: '705'},
  {name: 'Solomon Islands', alpha2Code: 'SB', alpha3Code: 'SLB', code: '090'},
  {name: 'Somalia', alpha2Code: 'SO', alpha3Code: 'SOM', code: '706'},
  {name: 'South Africa', alpha2Code: 'ZA', alpha3Code: 'ZAF', code: '710'},
  {
    name: 'South Georgia and the South Sandwich Islands',
    alpha2Code: 'GS',
    alpha3Code: 'SGS',
    code: '239',
  },
  {name: 'South Sudan', alpha2Code: 'SS', alpha3Code: 'SSD', code: '728'},
  {name: 'Spain', alpha2Code: 'ES', alpha3Code: 'ESP', code: '724'},
  {name: 'Sri Lanka', alpha2Code: 'LK', alpha3Code: 'LKA', code: '144'},
  {name: 'Sudan (the)', alpha2Code: 'SD', alpha3Code: 'SDN', code: '729'},
  {name: 'Suriname', alpha2Code: 'SR', alpha3Code: 'SUR', code: '740'},
  {
    name: 'Svalbard and Jan Mayen',
    alpha2Code: 'SJ',
    alpha3Code: 'SJM',
    code: '744',
  },
  {name: 'Sweden', alpha2Code: 'SE', alpha3Code: 'SWE', code: '752'},
  {name: 'Switzerland', alpha2Code: 'CH', alpha3Code: 'CHE', code: '756'},
  {
    name: 'Syrian Arab Republic',
    alpha2Code: 'SY',
    alpha3Code: 'SYR',
    code: '760',
  },
  {
    name: 'Taiwan (Province of China)',
    alpha2Code: 'TW',
    alpha3Code: 'TWN',
    code: '158',
  },
  {name: 'Tajikistan', alpha2Code: 'TJ', alpha3Code: 'TJK', code: '762'},
  {
    name: 'Tanzania, United Republic of',
    alpha2Code: 'TZ',
    alpha3Code: 'TZA',
    code: '834',
  },
  {name: 'Thailand', alpha2Code: 'TH', alpha3Code: 'THA', code: '764'},
  {name: 'Timor-Leste', alpha2Code: 'TL', alpha3Code: 'TLS', code: '626'},
  {name: 'Togo', alpha2Code: 'TG', alpha3Code: 'TGO', code: '768'},
  {name: 'Tokelau', alpha2Code: 'TK', alpha3Code: 'TKL', code: '772'},
  {name: 'Tonga', alpha2Code: 'TO', alpha3Code: 'TON', code: '776'},
  {
    name: 'Trinidad and Tobago',
    alpha2Code: 'TT',
    alpha3Code: 'TTO',
    code: '780',
  },
  {name: 'Tunisia', alpha2Code: 'TN', alpha3Code: 'TUN', code: '788'},
  {name: 'Turkey', alpha2Code: 'TR', alpha3Code: 'TUR', code: '792'},
  {name: 'Turkmenistan', alpha2Code: 'TM', alpha3Code: 'TKM', code: '795'},
  {
    name: 'Turks and Caicos Islands (the)',
    alpha2Code: 'TC',
    alpha3Code: 'TCA',
    code: '796',
  },
  {name: 'Tuvalu', alpha2Code: 'TV', alpha3Code: 'TUV', code: '798'},
  {name: 'Uganda', alpha2Code: 'UG', alpha3Code: 'UGA', code: '800'},
  {name: 'Ukraine', alpha2Code: 'UA', alpha3Code: 'UKR', code: '804'},
  {
    name: 'United Arab Emirates (the)',
    alpha2Code: 'AE',
    alpha3Code: 'ARE',
    code: '784',
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland (the)',
    alpha2Code: 'GB',
    alpha3Code: 'GBR',
    code: '826',
  },
  {
    name: 'United States Minor Outlying Islands (the)',
    alpha2Code: 'UM',
    alpha3Code: 'UMI',
    code: '581',
  },
  {
    name: 'United States of America (the)',
    alpha2Code: 'US',
    alpha3Code: 'USA',
    code: '840',
  },
  {name: 'Uruguay', alpha2Code: 'UY', alpha3Code: 'URY', code: '858'},
  {name: 'Uzbekistan', alpha2Code: 'UZ', alpha3Code: 'UZB', code: '860'},
  {name: 'Vanuatu', alpha2Code: 'VU', alpha3Code: 'VUT', code: '548'},
  {
    name: 'Venezuela (Bolivarian Republic of)',
    alpha2Code: 'VE',
    alpha3Code: 'VEN',
    code: '862',
  },
  {name: 'Viet Nam', alpha2Code: 'VN', alpha3Code: 'VNM', code: '704'},
  {
    name: 'Virgin Islands (British)',
    alpha2Code: 'VG',
    alpha3Code: 'VGB',
    code: '092',
  },
  {
    name: 'Virgin Islands (U.S.)',
    alpha2Code: 'VI',
    alpha3Code: 'VIR',
    code: '850',
  },
  {name: 'Wallis and Futuna', alpha2Code: 'WF', alpha3Code: 'WLF', code: '876'},
  {name: 'Western Sahara', alpha2Code: 'EH', alpha3Code: 'ESH', code: '732'},
  {name: 'Yemen', alpha2Code: 'YE', alpha3Code: 'YEM', code: '887'},
  {name: 'Zambia', alpha2Code: 'ZM', alpha3Code: 'ZMB', code: '894'},
  {name: 'Zimbabwe', alpha2Code: 'ZW', alpha3Code: 'ZWE', code: '716'},
  {name: 'Åland Islands', alpha2Code: 'AX', alpha3Code: 'ALA', code: '248'},
];

function getCountry({
  alpha2Code,
  alpha3Code,
}: {
  alpha2Code?: string;
  alpha3Code?: string;
}): CountryType | undefined {
  if (alpha2Code) {
    return countryList.find(country => country.alpha2Code === alpha2Code);
  } else if (alpha3Code) {
    return countryList.find(country => country.alpha3Code === alpha3Code);
  }

  return undefined;
}

function getCountryNameTranslated({
  alpha2Code,
  alpha3Code,
}: {
  alpha2Code?: string;
  alpha3Code?: string;
}): string | undefined {
  const country = getCountry({alpha2Code, alpha3Code});

  if (country) {
    return i18n.t(`countries.${country.name}`);
  }

  return undefined;
}

export function getCountryName(isoCode: string) {
  return getCountryNameTranslated({alpha2Code: isoCode});
}
