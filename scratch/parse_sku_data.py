import re
import json

raw_text = """COLLECTION	FABRIC	CATEGORY	TYPE/ITEM	COLOR	SIZE	SKU					
						NO	CODE	NAME	OFFLINE BAZAAR PRICE (RP)	MARKETPLACE DEFAULT PRICE (RP)	MARKETPLACE FINAL PRICE (RP)
Bianca	Satin	Outerwear	Blazer	Red Chili	S	1	BIANCA-BLAZER-REDCHILI-S	AISCHMIRA Bianca Blazer Red Chili S	Rp789.000	Rp1.209.000	Rp1.189.000
					M	2	BIANCA-BLAZER-REDCHILI-M	AISCHMIRA Bianca Blazer Red Chili M			
					L	3	BIANCA-BLAZER-REDCHILI-L	AISCHMIRA Bianca Blazer Red Chili L			
					XL	4	BIANCA-BLAZER-REDCHILI-XL	AISCHMIRA Bianca Blazer Red Chili XL			
				Yellow Ginger	S	5	BIANCA-BLAZER-YELLOWGINGER-S	AISCHMIRA Bianca Blazer Yellow Ginger S			
					M	6	BIANCA-BLAZER-YELLOWGINGER-M	AISCHMIRA Bianca Blazer Yellow Ginger M			
					L	7	BIANCA-BLAZER-YELLOWGINGER-L	AISCHMIRA Bianca Blazer Yellow Ginger L			
					XL	8	BIANCA-BLAZER-YELLOWGINGER-XL	AISCHMIRA Bianca Blazer Yellow Ginger XL			
				Pink Garlic	S	9	BIANCA-BLAZER-PINKGARLIC-S	AISCHMIRA Bianca Blazer Pink Garlic S			
					M	10	BIANCA-BLAZER-PINKGARLIC-M	AISCHMIRA Bianca Blazer Pink Garlic M			
					L	11	BIANCA-BLAZER-PINKGARLIC-L	AISCHMIRA Bianca Blazer Pink Garlic L			
					XL	12	BIANCA-BLAZER-PINKGARLIC-XL	AISCHMIRA Bianca Blazer Pink Garlic XL			
	Satin Printing	Accessories	Obie	Red Chili	S-M	13	BIANCA-OBIE-REDCHILI-S-M	AISCHMIRA Bianca Obie Red Chili S-M	Rp149.000	Rp239.000	Rp229.000
					L-XL	14	BIANCA-OBIE-REDCHILI-L-XL	AISCHMIRA Bianca Obie Red Chili L-XL			
				Yellow Ginger	S-M	15	BIANCA-OBIE-YELLOWGINGER-S-M	AISCHMIRA Bianca Obie Yellow Ginger S-M			
					L-XL	16	BIANCA-OBIE-YELLOWGINGER-L-XL	AISCHMIRA Bianca Obie Yellow Ginger L-XL			
				Pink Garlic	S-M	17	BIANCA-OBIE-PINKGARLIC-S-M	AISCHMIRA Bianca Obie Pink Garlic S-M			
					L-XL	18	BIANCA-OBIE-PINKGARLIC-L-XL	AISCHMIRA Bianca Obie Pink Garlic L-XL			
Priscila	Satin Pleats	Bottoms	Pleated Pants	White Garlic	S	19	PRISCILA-PLEATEDPANTS-WHITEGARLIC-S	AISCHMIRA Priscila Pleated Pants White Garlic S	Rp489.000	Rp749.000	Rp739.000
					M	20	PRISCILA-PLEATEDPANTS-WHITEGARLIC-M	AISCHMIRA Priscila Pleated Pants White Garlic M			
					L	21	PRISCILA-PLEATEDPANTS-WHITEGARLIC-L	AISCHMIRA Priscila Pleated Pants White Garlic L			
					XL	22	PRISCILA-PLEATEDPANTS-WHITEGARLIC-XL	AISCHMIRA Priscila Pleated Pants White Garlic XL			
				Gold Ginger	S	23	PRISCILA-PLEATEDPANTS-GOLDGINGER-S	AISCHMIRA Priscila Pleated Pants Gold Ginger S			
					M	24	PRISCILA-PLEATEDPANTS-GOLDGINGER-M	AISCHMIRA Priscila Pleated Pants Gold Ginger M			
					L	25	PRISCILA-PLEATEDPANTS-GOLDGINGER-L	AISCHMIRA Priscila Pleated Pants Gold Ginger L			
					XL	26	PRISCILA-PLEATEDPANTS-GOLDGINGER-XL	AISCHMIRA Priscila Pleated Pants Gold Ginger XL			
				Teal Mint	S	27	PRISCILA-PLEATEDPANTS-TEALMINT-S	AISCHMIRA Priscila Pleated Pants Teal Mint S			
					M	28	PRISCILA-PLEATEDPANTS-TEALMINT-M	AISCHMIRA Priscila Pleated Pants Teal Mint M			
					L	29	PRISCILA-PLEATEDPANTS-TEALMINT-L	AISCHMIRA Priscila Pleated Pants Teal Mint L			
					XL	30	PRISCILA-PLEATEDPANTS-TEALMINT-XL	AISCHMIRA Priscila Pleated Pants Teal Mint XL			
Safira	"Cotton Toyobo
Premium"	Tops	Top	Green Pandan	S-M	31	SAFIRA-TOP-GREENPANDAN-S-M	AISCHMIRA Safira Top Green Pandan S-M	Rp829.000	Rp1.269.000	Rp1.249.000
					L-XL	32	SAFIRA-TOP-GREENPANDAN-L-XL	AISCHMIRA Safira Top Green Pandan L-XL			
				Beige Candlenut	S-M	33	SAFIRA-TOP-BEIGECANDLENUT-S-M	AISCHMIRA Safira Top Beige Candlenut S-M			
					L-XL	34	SAFIRA-TOP-BEIGECANDLENUT-L-XL	AISCHMIRA Safira Top Beige Candlenut L-XL			
				Brown Cinnamon	S-M	35	SAFIRA-TOP-BROWNCINNAMON-S-M	AISCHMIRA Safira Top Brown Cinnamon S-M			
					L-XL	36	SAFIRA-TOP-BROWNCINNAMON-L-XL	AISCHMIRA Safira Top Brown Cinnamon L-XL			
		Bottoms	Skirt	Green Pandan	S-M	37	SAFIRA-SKIRT-GREENPANDAN-S-M	AISCHMIRA Safira Skirt Green Pandan S-M	Rp549.000	Rp839.000	Rp829.000
					L-XL	38	SAFIRA-SKIRT-GREENPANDAN-L-XL	AISCHMIRA Safira Skirt Green Pandan L-XL			
				Beige Candlenut	S-M	39	SAFIRA-SKIRT-BEIGECANDLENUT-S-M	AISCHMIRA Safira Skirt Beige Candlenut S-M			
					L-XL	40	SAFIRA-SKIRT-BEIGECANDLENUT-L-XL	AISCHMIRA Safira Skirt Beige Candlenut L-XL			
				Brown Cinnamon	S-M	41	SAFIRA-SKIRT-BROWNCINNAMON-S-M	AISCHMIRA Safira Skirt Brown Cinnamon S-M			
					L-XL	42	SAFIRA-SKIRT-BROWNCINNAMON-L-XL	AISCHMIRA Safira Skirt Brown Cinnamon L-XL			
Briana	Satin Armani	Tops	Blouse	Light Teal Galangal	S	43	BRIANA-BLOUSE-LIGHTTEALGALANGAL-S	AISCHMIRA Briana Blouse Light Teal Galangal S	Rp399.000	Rp609.000	Rp599.000
					M	44	BRIANA-BLOUSE-LIGHTTEALGALANGAL-M	AISCHMIRA Briana Blouse Light Teal Galangal M			
					L	45	BRIANA-BLOUSE-LIGHTTEALGALANGAL-L	AISCHMIRA Briana Blouse Light Teal Galangal L			
					XL	46	BRIANA-BLOUSE-LIGHTTEALGALANGAL-XL	AISCHMIRA Briana Blouse Light Teal Galangal XL			
				Black Chili	S	47	BRIANA-BLOUSE-BLACKCHILI-S	AISCHMIRA Briana Blouse Black Chili S			
					M	48	BRIANA-BLOUSE-BLACKCHILI-M	AISCHMIRA Briana Blouse Black Chili M			
					L	49	BRIANA-BLOUSE-BLACKCHILI-L	AISCHMIRA Briana Blouse Black Chili L			
					XL	50	BRIANA-BLOUSE-BLACKCHILI-XL	AISCHMIRA Briana Blouse Black Chili XL			
				White Clove	S	51	BRIANA-BLOUSE-WHITECLOVE-S	AISCHMIRA Briana Blouse White Clove S			
					M	52	BRIANA-BLOUSE-WHITECLOVE-M	AISCHMIRA Briana Blouse White Clove M			
					L	53	BRIANA-BLOUSE-WHITECLOVE-L	AISCHMIRA Briana Blouse White Clove L			
					XL	54	BRIANA-BLOUSE-WHITECLOVE-XL	AISCHMIRA Briana Blouse White Clove XL			
Tifani	Satin Maxmara	Bottoms	Trousers	Brown Clove	S	55	TIFANI-TROUSERS-BROWNCLOVE-S	AISCHMIRA Tifani Trousers Brown Clove S	Rp399.000	Rp609.000	Rp599.000
					M	56	TIFANI-TROUSERS-BROWNCLOVE-M	AISCHMIRA Tifani Trousers Brown Clove M			
					L	57	TIFANI-TROUSERS-BROWNCLOVE-L	AISCHMIRA Tifani Trousers Brown Clove L			
					XL	58	TIFANI-TROUSERS-BROWNCLOVE-XL	AISCHMIRA Tifani Trousers Brown Clove XL			
				Red Chili	S	59	TIFANI-TROUSERS-REDCHILI-S	AISCHMIRA Tifani Trousers Red Chili S			
					M	60	TIFANI-TROUSERS-REDCHILI-M	AISCHMIRA Tifani Trousers Red Chili M			
					L	61	TIFANI-TROUSERS-REDCHILI-L	AISCHMIRA Tifani Trousers Red Chili L			
					XL	62	TIFANI-TROUSERS-REDCHILI-XL	AISCHMIRA Tifani Trousers Red Chili XL			
				Gold Coriander Seed	S	63	TIFANI-TROUSERS-GOLDCORIANDERSEED-S	AISCHMIRA Tifani Trousers Gold Coriander Seed S			
					M	64	TIFANI-TROUSERS-GOLDCORIANDERSEED-M	AISCHMIRA Tifani Trousers Gold Coriander Seed M			
					L	65	TIFANI-TROUSERS-GOLDCORIANDERSEED-L	AISCHMIRA Tifani Trousers Gold Coriander Seed L			
					XL	66	TIFANI-TROUSERS-GOLDCORIANDERSEED-XL	AISCHMIRA Tifani Trousers Gold Coriander Seed XL			
Zamira	Satin Printing	Dress	Long Dress	Multicolor Garlic	S	67	ZAMIRA-LONGDRESS-MULTICOLORGARLIC-S	AISCHMIRA Zamira Long Dress Multicolor Garlic 	Rp1.299.000	Rp1.969.000	Rp1.949.000
					M	68	ZAMIRA-LONGDRESS-MULTICOLORGARLIC-M	AISCHMIRA Zamira Long Dress Multicolor Garlic 			
					L	69	ZAMIRA-LONGDRESS-MULTICOLORGARLIC-L	AISCHMIRA Zamira Long Dress Multicolor Garlic 			
					XL	70	ZAMIRA-LONGDRESS-MULTICOLORGARLIC-XL	AISCHMIRA Zamira Long Dress Multicolor Garlic 			
				Green Lime	S	71	ZAMIRA-LONGDRESS-GREENLIME-S	AISCHMIRA Zamira Long Dress Green Lime 			
					M	72	ZAMIRA-LONGDRESS-GREENLIME-M	AISCHMIRA Zamira Long Dress Green Lime 			
					L	73	ZAMIRA-LONGDRESS-GREENLIME-L	AISCHMIRA Long Dress Green Lime 			
					XL	74	ZAMIRA-LONGDRESS-GREENLIME-XL	AISCHMIRA Zamira Long Dress Green Lime 			
				Orange Turmeric	S	75	ZAMIRA-LONGDRESS-ORANGETURMERIC-S	AISCHMIRA Zamira Long Dress Orange Turmeric 			
					M	76	ZAMIRA-LONGDRESS-ORANGETURMERIC-M	AISCHMIRA Zamira Long Dress Orange Turmeric 			
					L	77	ZAMIRA-LONGDRESS-ORANGETURMERIC-L	AISCHMIRA Zamira Long Dress Orange Turmeric 			
					XL	78	ZAMIRA-LONGDRESS-ORANGETURMERIC-XL	AISCHMIRA Zamira Long Dress Orange Turmeric 			
Gendis	Satin Bridal	Tops	Top	Pink Chili	S	79	GENDIS-TOP-PINKCHILI-S	AISCHMIRA Gendis Top Pink Chili S	Rp699.000	Rp1.069.000	Rp1.049.000
					M	80	GENDIS-TOP-PINKCHILI-M	AISCHMIRA Gendis Top Pink Chili M			
					L	81	GENDIS-TOP-PINKCHILI-L	AISCHMIRA Gendis Top Pink Chili L			
					XL	82	GENDIS-TOP-PINKCHILI-XL	AISCHMIRA Gendis Top Pink Chili XL			
				Gold Chili	S	83	GENDIS-TOP-GOLDCHILI-S	AISCHMIRA Gendis Top Gold Chili S			
					M	84	GENDIS-TOP-GOLDCHILI-M	AISCHMIRA Gendis Top Gold Chili M			
					L	85	GENDIS-TOP-GOLDCHILI-L	AISCHMIRA Gendis Top Gold Chili L			
					XL	86	GENDIS-TOP-GOLDCHILI-XL	AISCHMIRA Gendis Top Gold Chili XL			
				Green Chili	S	87	GENDIS-TOP-GREENCHILI-S	AISCHMIRA Gendis Top Green Chili S			
					M	88	GENDIS-TOP-GREENCHILI-M	AISCHMIRA Gendis Top Green Chili M			
					L	89	GENDIS-TOP-GREENCHILI-L	AISCHMIRA Gendis Top Green Chili L			
					XL	90	GENDIS-TOP-GREENCHILI-XL	AISCHMIRA Gendis Top Green Chili XL			
				Purple Chili	S	91	GENDIS-TOP-PURPLECHILI-S	AISCHMIRA Gendis Top Purple Chili S			
					M	92	GENDIS-TOP-PURPLECHILI-M	AISCHMIRA Gendis Top Purple Chili M			
					L	93	GENDIS-TOP-PURPLECHILI-L	AISCHMIRA Gendis Top Purple Chili L			
					XL	94	GENDIS-TOP-PURPLECHILI-XL	AISCHMIRA Gendis Top Purple Chili XL			
Amara	Satin Bridal	Bottoms	Skirt	Pink Chili	S	95	AMARA-SKIRT-PINKCHILI-S	AISCHMIRA Amara Skirt Pink Chili S	Rp729.000	Rp1.119.000	Rp1.099.000
					M	96	AMARA-SKIRT-PINKCHILI-M	AISCHMIRA Amara Skirt Pink Chili M			
					L	97	AMARA-SKIRT-PINKCHILI-L	AISCHMIRA Amara Skirt Pink Chili L			
					XL	98	AMARA-SKIRT-PINKCHILI-XL	AISCHMIRA Amara Skirt Pink Chili XL			
				Green Chili	S	99	AMARA-SKIRT-GREENCHILI-S	AISCHMIRA Amara Skirt Green Chili S			
					M	100	AMARA-SKIRT-GREENCHILI-M	AISCHMIRA Amara Skirt Green Chili M			
					L	101	AMARA-SKIRT-GREENCHILI-L	AISCHMIRA Amara Skirt Green Chili L			
					XL	102	AMARA-SKIRT-GREENCHILI-XL	AISCHMIRA Amara Skirt Green Chili XL			
				Light Green Chili	S	103	AMARA-SKIRT-LIGHTGREENCHILI-S	AISCHMIRA Amara Skirt Light Green Chili S			
					M	104	AMARA-SKIRT-LIGHTGREENCHILI-M	AISCHMIRA Amara Skirt Light Green Chili M			
					L	105	AMARA-SKIRT-LIGHTGREENCHILI-L	AISCHMIRA Amara Skirt Light Green Chili L			
					XL	106	AMARA-SKIRT-LIGHTGREENCHILI-XL	AISCHMIRA Amara Skirt Light Green Chili XL			
				Purple Chili	S	107	AMARA-SKIRT-PURPLECHILI-S	AISCHMIRA Amara Skirt Purple Chili S			
					M	108	AMARA-SKIRT-PURPLECHILI-M	AISCHMIRA Amara Skirt Purple Chili M			
					L	109	AMARA-SKIRT-PURPLECHILI-L	AISCHMIRA Amara Skirt Purple Chili L			
					XL	110	AMARA-SKIRT-PURPLECHILI-XL	AISCHMIRA Amara Skirt Purple Chili XL			
Dasya	Tencel Uniqlo	Tops	Blouse	Red Sichuan Pepper	S-M	111	DASYA-BLOUSE-REDSICHUANPEPPER-S-M	AISCHMIRA Dasya Blouse Red Sichuan Pepper S-M	Rp409.000	Rp629.000	Rp619.000
					L-XL	112	DASYA-BLOUSE-REDSICHUANPEPPER-L-XL	AISCHMIRA Dasya Blouse Red Sichuan Pepper L-XL			
				Green Cardamom	S-M	113	DASYA-BLOUSE-GREENCARDAMOM-S-M	AISCHMIRA Dasya Blouse Green Cardamom S-M			
					L-XL	114	DASYA-BLOUSE-GREENCARDAMOM-L-XL	AISCHMIRA Dasya Blouse Green Cardamom L-XL			
				White Garlic	S-M	115	DASYA-BLOUSE-WHITEGARLIC-S-M	AISCHMIRA Dasya Blouse White Garlic S-M			
					L-XL	116	DASYA-BLOUSE-WHITEGARLIC-L-XL	AISCHMIRA Dasya Blouse White Garlic L-XL			
		Bottoms	Trousers	Red Sichuan Pepper	S-M	117	DASYA-TROUSERS-REDSICHUANPEPPER-S-M	AISCHMIRA Dasya Trousers Red Sichuan Pepper S-M	Rp389.000	Rp599.000	Rp589.000
					L-XL	118	DASYA-TROUSERS-REDSICHUANPEPPER-L-XL	AISCHMIRA Dasya Trousers Red Sichuan Pepper L-XL			
				Green Cardamom	S-M	119	DASYA-TROUSERS-GREENCARDAMOM-S-M	AISCHMIRA Dasya Trousers Green Cardamom S-M			
					L-XL	120	DASYA-TROUSERS-GREENCARDAMOM-L-XL	AISCHMIRA Dasya Trousers Green Cardamom L-XL			
				White Garlic	S-M	121	DASYA-TROUSERS-WHITEGARLIC-S-M	AISCHMIRA Dasya Trousers White Garlic S-M			
					L-XL	122	DASYA-TROUSERS-WHITEGARLIC-L-XL	AISCHMIRA Dasya Trousers White Garlic L-XL			
Jolly	Satin	Long Pyjama Set	Long Sleeve Top + Pants	Red Chili	S	123	JOLLY-LONGPYJAMASET-REDCHILI-S	AISCHMIRA Jolly Long Pyjama Set Red Chili S	Rp649.000	Rp989.000	Rp979.000
					M	124	JOLLY-LONGPYJAMASET-REDCHILI-M	AISCHMIRA Jolly Long Pyjama Set Red Chili M			
					L	125	JOLLY-LONGPYJAMASET-REDCHILI-L	AISCHMIRA Jolly Long Pyjama Set Red Chili L			
					XL	126	JOLLY-LONGPYJAMASET-REDCHILI-XL	AISCHMIRA Jolly Long Pyjama Set Red Chili XL			
				Pink Garlic	S	127	JOLLY-LONGPYJAMASET-PINKGARLIC-S	AISCHMIRA Jolly Long Pyjama Set Pink Garlic S			
					M	128	JOLLY-LONGPYJAMASET-PINKGARLIC-M	AISCHMIRA Jolly Long Pyjama Set Pink Garlic M			
					L	129	JOLLY-LONGPYJAMASET-PINKGARLIC-L	AISCHMIRA Jolly Long Pyjama Set Pink Garlic L			
					XL	130	JOLLY-LONGPYJAMASET-PINKGARLIC-XL	AISCHMIRA Jolly Long Pyjama Set Pink Garlic XL			
				Purple Shallot	S	131	JOLLY-LONGPYJAMASET-PURPLESHALLOT-S	AISCHMIRA Jolly Long Pyjama Set Purple Shallot S			
					M	132	JOLLY-LONGPYJAMASET-PURPLESHALLOT-M	AISCHMIRA Jolly Long Pyjama Set Purple Shallot M			
					L	133	JOLLY-LONGPYJAMASET-PURPLESHALLOT-L	AISCHMIRA Jolly Long Pyjama Set Purple Shallot L			
					XL	134	JOLLY-LONGPYJAMASET-PURPLESHALLOT-XL	AISCHMIRA Jolly Long Pyjama Set Purple Shallot XL			
		Short Pyjama Set	Short Sleeve Top + Shorts	Red Chili	S	135	JOLLY-SHORTPYJAMASET-REDCHILI-S	AISCHMIRA Jolly Short Pyjama Set Red Chili S	Rp599.000	Rp909.000	Rp899.000
					M	136	JOLLY-SHORTPYJAMASET-REDCHILI-M	AISCHMIRA Jolly Short Pyjama Set Red Chili M			
					L	137	JOLLY-SHORTPYJAMASET-REDCHILI-L	AISCHMIRA Jolly Short Pyjama Set Red Chili L			
					XL	138	JOLLY-SHORTPYJAMASET-REDCHILI-XL	AISCHMIRA Jolly Short Pyjama Set Red Chili XL			
				Pink Garlic	S	139	JOLLY-SHORTPYJAMASET-PINKGARLIC-S	AISCHMIRA Jolly Short Pyjama Set Pink Garlic S			
					M	140	JOLLY-SHORTPYJAMASET-PINKGARLIC-M	AISCHMIRA Jolly Short Pyjama Set Pink Garlic M			
					L	141	JOLLY-SHORTPYJAMASET-PINKGARLIC-L	AISCHMIRA Jolly Short Pyjama Set Pink Garlic L			
					XL	142	JOLLY-SHORTPYJAMASET-PINKGARLIC-XL	AISCHMIRA Jolly Short Pyjama Set Pink Garlic XL			
				Purple Shallot	S	143	JOLLY-SHORTPYJAMASET-PURPLESHALLOT-S	AISCHMIRA Jolly Short Pyjama Set Purple Shallot S			
					M	144	JOLLY-SHORTPYJAMASET-PURPLESHALLOT-M	AISCHMIRA Jolly Short Pyjama Set Purple Shallot M			
					L	145	JOLLY-SHORTPYJAMASET-PURPLESHALLOT-L	AISCHMIRA Jolly Short Pyjama Set Purple Shallot L			
					XL	146	JOLLY-SHORTPYJAMASET-PURPLESHALLOT-XL	AISCHMIRA Jolly Short Pyjama Set Purple Shallot XL			
Aveline	-	Tops	Shirt	White Garlic	S	147	AVELINE-SHIRT-WHITEGARLIC-S	AISCHMIRA Aveline Shirt White Garlic S	Rp399.000	Rp609.000	Rp599.000
					M	148	AVELINE-SHIRT-WHITEGARLIC-M	AISCHMIRA Aveline Shirt White Garlic M			
					L	149	AVELINE-SHIRT-WHITEGARLIC-L	AISCHMIRA Aveline Shirt White Garlic L			
					XL	150	AVELINE-SHIRT-WHITEGARLIC-XL	AISCHMIRA Aveline Shirt White Garlic XL			
				Green Cardamom	S	151	AVELINE-SHIRT-GREENCARDAMOM-S	AISCHMIRA Aveline Shirt Green Cardamom S			
					M	152	AVELINE-SHIRT-GREENCARDAMOM-M	AISCHMIRA Aveline Shirt Green Cardamom M			
					L	153	AVELINE-SHIRT-GREENCARDAMOM-L	AISCHMIRA Aveline Shirt Green Cardamom L			
					XL	154	AVELINE-SHIRT-GREENCARDAMOM-XL	AISCHMIRA Aveline Shirt Green Cardamom XL			
				Brown Ginger	S	155	AVELINE-SHIRT-BROWNGINGER-S	AISCHMIRA Aveline Shirt Brown Ginger S			
					M	156	AVELINE-SHIRT-BROWNGINGER-M	AISCHMIRA Aveline Shirt Brown Ginger M			
					L	157	AVELINE-SHIRT-BROWNGINGER-L	AISCHMIRA Aveline Shirt Brown Ginger L			
					XL	158	AVELINE-SHIRT-BROWNGINGER-XL	AISCHMIRA Aveline Shirt Brown Ginger XL			
				Lilac Onion	S	159	AVELINE-SHIRT-LILACONION-S	AISCHMIRA Aveline Shirt Lilac Onion S			
					M	160	AVELINE-SHIRT-LILACONION-M	AISCHMIRA Aveline Shirt Lilac Onion M			
					L	161	AVELINE-SHIRT-LILACONION-L	AISCHMIRA Aveline Shirt Lilac Onion L			
					XL	162	AVELINE-SHIRT-LILACONION-XL	AISCHMIRA Aveline Shirt Lilac Onion XL			
				Black Pepper	S	163	AVELINE-SHIRT-BLACKPEPPER-S	AISCHMIRA Aveline Shirt Black Pepper S			
					M	164	AVELINE-SHIRT-BLACKPEPPER-M	AISCHMIRA Aveline Shirt Black Pepper M			
					L	165	AVELINE-SHIRT-BLACKPEPPER-L	AISCHMIRA Aveline Shirt Black Pepper L			
					XL	166	AVELINE-SHIRT-BLACKPEPPER-XL	AISCHMIRA Aveline Shirt Black Pepper XL			
Luna	-	Bottoms	Pants	Pink Garlic	S	167	LUNA-PANTS-PINKGARLIC-S	AISCHMIRA Luna Pants Pink Garlic S	Rp499.000	Rp759.000	Rp749.000
					M	168	LUNA-PANTS-PINKGARLIC-M	AISCHMIRA Luna Pants Pink Garlic M			
					L	169	LUNA-PANTS-PINKGARLIC-L	AISCHMIRA Luna Pants Pink Garlic L			
					XL	170	LUNA-PANTS-PINKGARLIC-XL	AISCHMIRA Luna Pants Pink Garlic XL			
				Brown Nutmeg	S	171	LUNA-PANTS-BROWNNUTMEG-S	AISCHMIRA Luna Pants Brown Nutmeg S			
					M	172	LUNA-PANTS-BROWNNUTMEG-M	AISCHMIRA Luna Pants Brown Nutmeg M			
					L	173	LUNA-PANTS-BROWNNUTMEG-L	AISCHMIRA Luna Pants Brown Nutmeg L			
					XL	174	LUNA-PANTS-BROWNNUTMEG-XL	AISCHMIRA Luna Pants Brown Nutmeg XL			
				Black Pepper	S	175	LUNA-PANTS-BLACKPEPPER-S	AISCHMIRA Luna Pants Black Pepper S			
					M	176	LUNA-PANTS-BLACKPEPPER-M	AISCHMIRA Luna Pants Black Pepper M			
					L	177	LUNA-PANTS-BLACKPEPPER-L	AISCHMIRA Luna Pants Black Pepper L			
					XL	178	LUNA-PANTS-BLACKPEPPER-XL	AISCHMIRA Luna Pants Black Pepper XL			
Am Monogram	-	Accessories	Scarf	Dirt	-	179	AMMONOGRAM-SCARF-DIRT	AISCHMIRA Am Monogram Scarf Dirt	Rp179.000	Rp289.000	Rp279.000
				Coal	-	180	AMMONOGRAM-SCARF-COAL	AISCHMIRA Am Monogram Scarf Coal			
				Snow	-	181	AMMONOGRAM-SCARF-SNOW	AISCHMIRA Am Monogram Scarf Snow			
				Sand	-	182	AMMONOGRAM-SCARF-SAND	AISCHMIRA Am Monogram Scarf Sand			
				Petal	-	183	AMMONOGRAM-SCARF-PETAL	AISCHMIRA Am Monogram Scarf Petal			
Floral Meadow	-	Accessories	Scarf	Pink Blossom	-	184	FLORALMEADOW-SCARF-PINKBLOSSOM	AISCHMIRA Floral Meadow Scarf Pink Blossom			
				Red Rose	-	185	FLORALMEADOW-SCARF-REDROSE	AISCHMIRA Floral Meadow Scarf Red Rose			
				Pistachio	-	186	FLORALMEADOW-SCARF-PISTACHIO	AISCHMIRA Floral Meadow Scarf Pistachio			
				Almond	-	187	FLORALMEADOW-SCARF-ALMOND	AISCHMIRA Floral Meadow Scarf Almond			
				Sunflower	-	188	FLORALMEADOW-SCARF-SUNFLOWER	AISCHMIRA Floral Meadow Scarf Sunflower			
Chili Chic	-	Accessories	Scarf	Candlenut	-	189	CHILICHIC-SCARF-CANDLENUT	AISCHMIRA Chili Chic Scarf Candlenut			
				Green Chili	-	190	CHILICHIC-SCARF-GREENCHILI	AISCHMIRA Chili Chic Scarf Green Chili			
				Nutmeg	-	191	CHILICHIC-SCARF-NUTMEG	AISCHMIRA Chili Chic Scarf Nutmeg			
				Lemon Grass	-	192	CHILICHIC-SCARF-LEMONGRASS	AISCHMIRA Chili Chic Scarf Lemon Grass			
Garlic Bloom	-	Accessories	Scarf	Mint	-	193	GARLICBLOOM-SCARF-MINT	AISCHMIRA Garlic Bloom Scarf Mint			
				Teal	-	194	GARLICBLOOM-SCARF-TEAL	AISCHMIRA Garlic Bloom Scarf Teal			
				Baby Pink	-	195	GARLICBLOOM-SCARF-BABYPINK	AISCHMIRA Garlic Bloom Scarf Baby Pink			
				Purple	-	196	GARLICBLOOM-SCARF-PURPLE	AISCHMIRA Garlic Bloom Scarf Purple			
				White	-	197	GARLICBLOOM-SCARF-WHITE	AISCHMIRA Garlic Bloom Scarf White			
Spice Blossom	-	Accessories	Scarf	Red Chili	-	198	SPICEBLOSSOM-SCARF-REDCHILI	AISCHMIRA Spice Blossom Scarf Red Chili			
				Cardamom	-	199	SPICEBLOSSOM-SCARF-CARDAMOM	AISCHMIRA Spice Blossom Scarf Cardamom			
				Bay Leaf	-	200	SPICEBLOSSOM-SCARF-BAYLEAF	AISCHMIRA Spice Blossom Scarf Bay Leaf			
				Ginger	-	201	SPICEBLOSSOM-SCARF-GINGER	AISCHMIRA Spice Blossom Scarf Ginger			
Femme	Semi Wool	Outerwear	Outer	Black	S	202	FEMME-OUTER-BLACK-S	AISCHMIRA Femme Outer Black S	Rp389.000	Rp599.000	Rp589.000
					M	203	FEMME-OUTER-BLACK-M	AISCHMIRA Femme Outer Black M			
					L	204	FEMME-OUTER-BLACK-L	AISCHMIRA Femme Outer Black L			
					XL	205	FEMME-OUTER-BLACK-XL	AISCHMIRA Femme Outer Black XL			
					XXL	206	FEMME-OUTER-BLACK-XXL	AISCHMIRA Femme Outer Black XXL			
				Maroon	S	207	FEMME-OUTER-MAROON-S	AISCHMIRA Femme Outer Maroon S			
					M	208	FEMME-OUTER-MAROON-M	AISCHMIRA Femme Outer Maroon M			
					L	209	FEMME-OUTER-MAROON-L	AISCHMIRA Femme Outer Maroon L			
					XL	210	FEMME-OUTER-MAROON-XL	AISCHMIRA Femme Outer Maroon XL			
					XXL	211	FEMME-OUTER-MAROON-XXL	AISCHMIRA Femme Outer Maroon XXL			
				Wood	S	212	FEMME-OUTER-WOOD-S	AISCHMIRA Femme Outer Wood S			
					M	213	FEMME-OUTER-WOOD-M	AISCHMIRA Femme Outer Wood M			
					L	214	FEMME-OUTER-WOOD-L	AISCHMIRA Femme Outer Wood L			
					XL	215	FEMME-OUTER-WOOD-XL	AISCHMIRA Femme Outer Wood XL			
					XXL	216	FEMME-OUTER-WOOD-XXL	AISCHMIRA Femme Outer Wood XXL			
				Baby Pink	S	217	FEMME-OUTER-BABYPINK-S	AISCHMIRA Femme Outer Baby Pink S			
					M	218	FEMME-OUTER-BABYPINK-M	AISCHMIRA Femme Outer Baby Pink M			
					L	219	FEMME-OUTER-BABYPINK-L	AISCHMIRA Femme Outer Baby Pink L			
					XL	220	FEMME-OUTER-BABYPINK-XL	AISCHMIRA Femme Outer Baby Pink XL			
					XXL	221	FEMME-OUTER-BABYPINK-XXL	AISCHMIRA Femme Outer Baby Pink XXL			
				Oat	S	222	FEMME-OUTER-OAT-S	AISCHMIRA Femme Outer Oat S			
					M	223	FEMME-OUTER-OAT-M	AISCHMIRA Femme Outer Oat M			
					L	224	FEMME-OUTER-OAT-L	AISCHMIRA Femme Outer Oat L			
					XL	225	FEMME-OUTER-OAT-XL	AISCHMIRA Femme Outer Oat XL			
					XXL	226	FEMME-OUTER-OAT-XXL	AISCHMIRA Femme Outer Oat XXL			
		Tops	Tank Top	Black	XS	227	FEMME-TANKTOP-BLACK-XS	AISCHMIRA Femme Tank Top Black XS	Rp269.000	Rp419.000	Rp409.000
					S	228	FEMME-TANKTOP-BLACK-S	AISCHMIRA Femme Tank Top Black S			
					M	229	FEMME-TANKTOP-BLACK-M	AISCHMIRA Femme Tank Top Black M			
					L	230	FEMME-TANKTOP-BLACK-L	AISCHMIRA Femme Tank Top Black L			
					XL	231	FEMME-TANKTOP-BLACK-XL	AISCHMIRA Femme Tank Top Black XL			
				Maroon	XS	232	FEMME-TANKTOP-MAROON-XS	AISCHMIRA Femme Tank Top Maroon XS			
					S	233	FEMME-TANKTOP-MAROON-S	AISCHMIRA Femme Tank Top Maroon S			
					M	234	FEMME-TANKTOP-MAROON-M	AISCHMIRA Femme Tank Top Maroon M			
					L	235	FEMME-TANKTOP-MAROON-L	AISCHMIRA Femme Tank Top Maroon L			
					XL	236	FEMME-TANKTOP-MAROON-XL	AISCHMIRA Femme Tank Top Maroon XL			
				Wood	XS	237	FEMME-TANKTOP-WOOD-XS	AISCHMIRA Femme Tank Top Wood XS			
					S	238	FEMME-TANKTOP-WOOD-S	AISCHMIRA Femme Tank Top Wood XS			
					M	239	FEMME-TANKTOP-WOOD-M	AISCHMIRA Femme Tank Top Wood M			
					L	240	FEMME-TANKTOP-WOOD-L	AISCHMIRA Femme Tank Top Wood L			
					XL	241	FEMME-TANKTOP-WOOD-XL	AISCHMIRA Femme Tank Top Wood XL			
				Baby Pink	XS	242	FEMME-TANKTOP-BABYPINK-XS	AISCHMIRA Femme Tank Top Baby Pink XS			
					S	243	FEMME-TANKTOP-BABYPINK-S	AISCHMIRA Femme Tank Top Baby Pink S			
					M	244	FEMME-TANKTOP-BABYPINK-M	AISCHMIRA Femme Tank Top Baby Pink M			
					L	245	FEMME-TANKTOP-BABYPINK-L	AISCHMIRA Femme Tank Top Baby Pink L			
					XL	246	FEMME-TANKTOP-BABYPINK-XL	AISCHMIRA Femme Tank Top Baby Pink XL			
				Oat	XS	247	FEMME-TANKTOP-OAT-XS	AISCHMIRA Femme Tank Top Oat XS			
					S	248	FEMME-TANKTOP-OAT-S	AISCHMIRA Femme Tank Top Oat S			
					M	249	FEMME-TANKTOP-OAT-M	AISCHMIRA Femme Tank Top Oat M			
					L	250	FEMME-TANKTOP-OAT-L	AISCHMIRA Femme Tank Top Oat L			
					XL	251	FEMME-TANKTOP-OAT-XL	AISCHMIRA Femme Tank Top Oat XL			
		Bottoms	Skirt	Black	XS	252	FEMME-SKIRT-BLACK-XS	AISCHMIRA Femme Skirt Black XS	Rp729.000	Rp1.119.000	Rp1.099.000
					S	253	FEMME-SKIRT-BLACK-S	AISCHMIRA Femme Skirt Black S			
					M	254	FEMME-SKIRT-BLACK-M	AISCHMIRA Femme Skirt Black M			
					L	255	FEMME-SKIRT-BLACK-L	AISCHMIRA Femme Skirt Black L			
					XL	256	FEMME-SKIRT-BLACK-XL	AISCHMIRA Femme Skirt Black XL			
					XXL	257	FEMME-SKIRT-BLACK-XXL	AISCHMIRA Femme Skirt Black XXL			
				Maroon	XS	258	FEMME-SKIRT-MAROON-XS	AISCHMIRA Femme Skirt Maroon XS			
					S	259	FEMME-SKIRT-MAROON-S	AISCHMIRA Femme Skirt Maroon S			
					M	260	FEMME-SKIRT-MAROON-M	AISCHMIRA Femme Skirt Maroon M			
					L	261	FEMME-SKIRT-MAROON-L	AISCHMIRA Femme Skirt Maroon L			
					XL	262	FEMME-SKIRT-MAROON-XL	AISCHMIRA Femme Skirt Maroon XL			
					XXL	263	FEMME-SKIRT-MAROON-XXL	AISCHMIRA Femme Skirt Maroon XXL			
				Wood	XS	264	FEMME-SKIRT-WOOD-XS	AISCHMIRA Femme Skirt Wood XS			
					S	265	FEMME-SKIRT-WOOD-S	AISCHMIRA Femme Skirt Wood S			
					M	266	FEMME-SKIRT-WOOD-M	AISCHMIRA Femme Skirt Wood M			
					L	267	FEMME-SKIRT-WOOD-L	AISCHMIRA Femme Skirt Wood L			
					XL	268	FEMME-SKIRT-WOOD-XL	AISCHMIRA Femme Skirt Wood XL			
					XXL	269	FEMME-SKIRT-WOOD-XXL	AISCHMIRA Femme Skirt Wood XXL			
				Baby Pink	XS	270	FEMME-SKIRT-BABYPINK-XS	AISCHMIRA Femme Skirt Baby Pink XS			
					S	271	FEMME-SKIRT-BABYPINK-S	AISCHMIRA Femme Skirt Baby Pink S			
					M	272	FEMME-SKIRT-BABYPINK-M	AISCHMIRA Femme Skirt Baby Pink M			
					L	273	FEMME-SKIRT-BABYPINK-L	AISCHMIRA Femme Skirt Baby Pink L			
					XL	274	FEMME-SKIRT-BABYPINK-XL	AISCHMIRA Femme Skirt Baby Pink XL			
					XXL	275	FEMME-SKIRT-BABYPINK-XXL	AISCHMIRA Femme Skirt Baby Pink XXL			
				Oat	XS	276	FEMME-SKIRT-OAT-XS	AISCHMIRA Femme Skirt Oat XS			
					S	277	FEMME-SKIRT-OAT-S	AISCHMIRA Femme Skirt Oat S			
					M	278	FEMME-SKIRT-OAT-M	AISCHMIRA Femme Skirt Oat M			
					L	279	FEMME-SKIRT-OAT-L	AISCHMIRA Femme Skirt Oat L			
					XL	280	FEMME-SKIRT-OAT-XL	AISCHMIRA Femme Skirt Oat XL			
					XXL	281	FEMME-SKIRT-OAT-XXL	AISCHMIRA Femme Skirt Oat XXL			
Her	Semi Wool	Tops	Long Sleeve Top	Maroon	XS	282	HER-LONGSLEEVETOP-MAROON-XS	AISCHMIRA Her Long Sleeve Top Maroon XS	Rp479.000	Rp729.000	Rp719.000
					S	283	HER-LONGSLEEVETOP-MAROON-S	AISCHMIRA Her Long Sleeve Top Maroon S			
					M	284	HER-LONGSLEEVETOP-MAROON-M	AISCHMIRA Her Long Sleeve Top Maroon M			
					L	285	HER-LONGSLEEVETOP-MAROON-L	AISCHMIRA Her Long Sleeve Top Maroon L			
					XL	286	HER-LONGSLEEVETOP-MAROON-XL	AISCHMIRA Her Long Sleeve Top Maroon XL			
				Wood	XS	287	HER-LONGSLEEVETOP-WOOD-XS	AISCHMIRA Her Long Sleeve Top Wood XS			
					S	288	HER-LONGSLEEVETOP-WOOD-S	AISCHMIRA Her Long Sleeve Top Wood S			
					M	289	HER-LONGSLEEVETOP-WOOD-M	AISCHMIRA Her Long Sleeve Top Wood M			
					L	290	HER-LONGSLEEVETOP-WOOD-L	AISCHMIRA Her Long Sleeve Top Wood L			
					XL	291	HER-LONGSLEEVETOP-WOOD-XL	AISCHMIRA Her Long Sleeve Top Wood XL			
				Black	XS	292	HER-LONGSLEEVETOP-BLACK-XS	AISCHMIRA Her Long Sleeve Top Black XS			
					S	293	HER-LONGSLEEVETOP-BLACK-S	AISCHMIRA Her Long Sleeve Top Black S			
					M	294	HER-LONGSLEEVETOP-BLACK-M	AISCHMIRA Her Long Sleeve Top Black M			
					L	295	HER-LONGSLEEVETOP-BLACK-L	AISCHMIRA Her Long Sleeve Top Black L			
					XL	296	HER-LONGSLEEVETOP-BLACK-XL	AISCHMIRA Her Long Sleeve Top Black XL			
				Oat	XS	297	HER-LONGSLEEVETOP-OAT-XS	AISCHMIRA Her Long Sleeve Top Oat XS			
					S	298	HER-LONGSLEEVETOP-OAT-S	AISCHMIRA Her Long Sleeve Top Oat S			
					M	299	HER-LONGSLEEVETOP-OAT-M	AISCHMIRA Her Long Sleeve Top Oat M			
					L	300	HER-LONGSLEEVETOP-OAT-L	AISCHMIRA Her Long Sleeve Top Oat L			
					XL	301	HER-LONGSLEEVETOP-OAT-XL	AISCHMIRA Her Long Sleeve Top Oat XL			
		Tops	Short Sleeve Top	Maroon	XS	302	HER-SHORTSLEEVETOP-MAROON-XS	AISCHMIRA Her Short Sleeve Top Maroon XS	Rp429.000	Rp659.000	Rp649.000
					S	303	HER-SHORTSLEEVETOP-MAROON-S	AISCHMIRA Her Short Sleeve Top Maroon S			
					M	304	HER-SHORTSLEEVETOP-MAROON-M	AISCHMIRA Her Short Sleeve Top Maroon M			
					L	305	HER-SHORTSLEEVETOP-MAROON-L	AISCHMIRA Her Short Sleeve Top Maroon L			
					XL	306	HER-SHORTSLEEVETOP-MAROON-XL	AISCHMIRA Her Short Sleeve Top Maroon XL			
				Wood	XS	307	HER-SHORTSLEEVETOP-WOOD-XS	AISCHMIRA Her Short Sleeve Top Wood XS			
					S	308	HER-SHORTSLEEVETOP-WOOD-S	AISCHMIRA Her Short Sleeve Top Wood XS			
					M	309	HER-SHORTSLEEVETOP-WOOD-M	AISCHMIRA Her Short Sleeve Top Wood M			
					L	310	HER-SHORTSLEEVETOP-WOOD-L	AISCHMIRA Her Short Sleeve Top Wood L			
					XL	311	HER-SHORTSLEEVETOP-WOOD-XL	AISCHMIRA Her Short Sleeve Top Wood XL			
				Black	XS	312	HER-SHORTSLEEVETOP-BLACK-XS	AISCHMIRA Her Short Sleeve Top Black XS			
					S	313	HER-SHORTSLEEVETOP-BLACK-S	AISCHMIRA Her Short Sleeve Top Black S			
					M	314	HER-SHORTSLEEVETOP-BLACK-M	AISCHMIRA Her Short Sleeve Top Black M			
					L	315	HER-SHORTSLEEVETOP-BLACK-L	AISCHMIRA Her Short Sleeve Top Black L			
					XL	316	HER-SHORTSLEEVETOP-BLACK-XL	AISCHMIRA Her Short Sleeve Top Black XL			
				Oat	XS	317	HER-SHORTSLEEVETOP-OAT-XS	AISCHMIRA Her Short Sleeve Top Oat XS			
					S	318	HER-SHORTSLEEVETOP-OAT-S	AISCHMIRA Her Short Sleeve Top Oat S			
					M	319	HER-SHORTSLEEVETOP-OAT-M	AISCHMIRA Her Short Sleeve Top Oat S			
					L	320	HER-SHORTSLEEVETOP-OAT-L	AISCHMIRA Her Short Sleeve Top Oat L			
					XL	321	HER-SHORTSLEEVETOP-OAT-XL	AISCHMIRA Her Short Sleeve Top Oat XL			
		Bottoms	Pants	Wood	XS	322	HER-PANTS-WOOD-XS	AISCHMIRA Her Pants Wood XS	Rp399.000	Rp609.000	Rp599.000
					S	323	HER-PANTS-WOOD-S	AISCHMIRA Her Pants Wood S			
					M	324	HER-PANTS-WOOD-M	AISCHMIRA Her Pants Wood S			
					L	325	HER-PANTS-WOOD-L	AISCHMIRA Her Pants Wood L			
					XL	326	HER-PANTS-WOOD-XL	AISCHMIRA Her Pants Wood XL			
					XXL	327	HER-PANTS-WOOD-XXL	AISCHMIRA Her Pants Wood XXL			
				Black	XS	328	HER-PANTS-BLACK-XS	AISCHMIRA Her Pants Black XS			
					S	329	HER-PANTS-BLACK-S	AISCHMIRA Her Pants Black S			
					M	330	HER-PANTS-BLACK-M	AISCHMIRA Her Pants Black M			
					L	331	HER-PANTS-BLACK-L	AISCHMIRA Her Pants Black L			
					XL	332	HER-PANTS-BLACK-XL	AISCHMIRA Her Pants Black XL			
					XXL	333	HER-PANTS-BLACK-XXL	AISCHMIRA Her Pants Black XXL			
				Oat	XS	334	HER-PANTS-OAT-XS	AISCHMIRA Her Pants Oat XS			
					S	335	HER-PANTS-OAT-S	AISCHMIRA Her Pants Oat S			
					M	336	HER-PANTS-OAT-M	AISCHMIRA Her Pants Oat M			
					L	337	HER-PANTS-OAT-L	AISCHMIRA Her Pants Oat L			
					XL	338	HER-PANTS-OAT-XL	AISCHMIRA Her Pants Oat XL			
					XXL	339	HER-PANTS-OAT-XXL	AISCHMIRA Her Pants Oat XXL			
She	Katun	Dress	Dress	Black	XS	340	SHE-DRESS-BLACK-XS	AISCHMIRA She Dress Black XS	Rp789.000	Rp1.209.000	Rp1.189.000
					S	341	SHE-DRESS-BLACK-S	AISCHMIRA She Dress Black S			
					M	342	SHE-DRESS-BLACK-M	AISCHMIRA She Dress Black M			
					L	343	SHE-DRESS-BLACK-L	AISCHMIRA She Dress Black L			
					XL	344	SHE-DRESS-BLACK-XL	AISCHMIRA She Dress Black XL			
					XXL	345	SHE-DRESS-BLACK-XXL	AISCHMIRA She Dress Black XXL			
				Maroon	XS	346	SHE-DRESS-MAROON-XS	AISCHMIRA She Dress Maroon XS			
					S	347	SHE-DRESS-MAROON-S	AISCHMIRA She Dress Maroon S			
					M	348	SHE-DRESS-MAROON-M	AISCHMIRA She Dress Maroon M			
					L	349	SHE-DRESS-MAROON-L	AISCHMIRA She Dress Maroon L			
					XL	350	SHE-DRESS-MAROON-XL	AISCHMIRA She Dress Maroon XL			
					XXL	351	SHE-DRESS-MAROON-XXL	AISCHMIRA She Dress Maroon XXL			
				Baby Pink	XS	352	SHE-DRESS-BABYPINK-XS	AISCHMIRA She Dress Baby Pink XS			
					S	353	SHE-DRESS-BABYPINK-S	AISCHMIRA She Dress Baby Pink S			
					M	354	SHE-DRESS-BABYPINK-M	AISCHMIRA She Dress Baby Pink M			
					L	355	SHE-DRESS-BABYPINK-L	AISCHMIRA She Dress Baby Pink L			
					XL	356	SHE-DRESS-BABYPINK-XL	AISCHMIRA She Dress Baby Pink XL			
					XXL	357	SHE-DRESS-BABYPINK-XXL	AISCHMIRA She Dress Baby Pink XXL			
				Butter Yellow	XS	358	SHE-DRESS-BUTTERYELLOW-XS	AISCHMIRA She Dress Butter Yellow XS			
					S	359	SHE-DRESS-BUTTERYELLOW-S	AISCHMIRA She Dress Butter Yellow S			
					M	360	SHE-DRESS-BUTTERYELLOW-M	AISCHMIRA She Dress Butter Yellow M			
					L	361	SHE-DRESS-BUTTERYELLOW-L	AISCHMIRA She Dress Butter Yellow L			
					XL	362	SHE-DRESS-BUTTERYELLOW-XL	AISCHMIRA She Dress Butter Yellow XL			
					XXL	363	SHE-DRESS-BUTTERYELLOW-XXL	AISCHMIRA She Dress Butter Yellow XXL			
				Broken White	XS	364	SHE-DRESS-BROKENWHITE-XS	AISCHMIRA She Dress Broken White XS			
					S	365	SHE-DRESS-BROKENWHITE-S	AISCHMIRA She Dress Broken White S			
					M	366	SHE-DRESS-BROKENWHITE-M	AISCHMIRA She Dress Broken White M			
					L	367	SHE-DRESS-BROKENWHITE-L	AISCHMIRA She Dress Broken White L			
					XL	368	SHE-DRESS-BROKENWHITE-XL	AISCHMIRA She Dress Broken White XL			
					XXL	369	SHE-DRESS-BROKENWHITE-XXL	AISCHMIRA She Dress Broken White XXL"""

def parse_price(val_str):
    if not val_str or not val_str.strip():
        return None
    cleaned = re.sub(r'[^\d]', '', val_str)
    return int(cleaned) if cleaned else None

lines = raw_text.split('\n')
# Skip the 2 header lines
header1 = lines[0].split('\t')
header2 = lines[1].split('\t')

print(f"Header 1: {header1}")
print(f"Header 2: {header2}")

rows = []
curr_collection = ""
curr_fabric = ""
curr_category = ""
curr_type = ""
curr_color = ""
curr_offline_price = None
curr_default_price = None
curr_final_price = None

# We need to handle multi-line strings in raw_text if any, e.g. "Cotton Toyobo\nPremium"
# Let's normalize text tokens first
# Notice Safira has "Cotton Toyobo\nPremium"

# Fix embedded newlines in quoted cells like "Cotton Toyobo\nPremium"
raw_text_clean = raw_text.replace('"Cotton Toyobo\nPremium"', 'Cotton Toyobo Premium')
lines = raw_text_clean.split('\n')

processed_lines = lines[2:] # Skip 2 header lines

parsed_skus = []

for idx, line in enumerate(processed_lines):
    parts = line.split('\t')
    # Pad parts to 12 columns
    while len(parts) < 12:
        parts.append('')
    
    col_collection = parts[0].strip().replace('"', '')
    col_fabric = parts[1].strip().replace('"', '')
    col_category = parts[2].strip().replace('"', '')
    col_type = parts[3].strip().replace('"', '')
    col_color = parts[4].strip().replace('"', '')
    col_size = parts[5].strip().replace('"', '')
    col_sku_no = parts[6].strip()
    col_sku_code = parts[7].strip()
    col_sku_name = parts[8].strip()
    col_offline_price = parts[9].strip()
    col_default_price = parts[10].strip()
    col_final_price = parts[11].strip()

    if col_collection:
        curr_collection = col_collection
    if col_fabric:
        curr_fabric = col_fabric
    if col_category:
        curr_category = col_category
    if col_type:
        curr_type = col_type
    if col_color:
        curr_color = col_color
    
    # Prices
    p_off = parse_price(col_offline_price)
    p_def = parse_price(col_default_price)
    p_fin = parse_price(col_final_price)
    
    if p_off is not None:
        curr_offline_price = p_off
    if p_def is not None:
        curr_default_price = p_def
    if p_fin is not None:
        curr_final_price = p_fin

    if not col_sku_no and not col_sku_code:
        continue

    parsed_skus.append({
        "line_index": idx + 1,
        "sku_no": int(col_sku_no) if col_sku_no.isdigit() else col_sku_no,
        "sku_code": col_sku_code,
        "sku_name": col_sku_name,
        "collection": curr_collection,
        "fabric": curr_fabric,
        "category": curr_category,
        "type": curr_type,
        "color": curr_color,
        "size": col_size,
        "offline_bazaar_price": curr_offline_price,
        "marketplace_default_price": curr_default_price,
        "marketplace_final_price": curr_final_price,
    })

print(f"Total parsed SKUs: {len(parsed_skus)}")

print("SKU NO values and types:")
for x in parsed_skus:
    if not isinstance(x['sku_no'], int):
        print(f"Non-int SKU NO: {x['sku_no']} in row {x}")

sku_nos = [int(x['sku_no']) for x in parsed_skus if isinstance(x['sku_no'], int)]
print(f"Valid Int SKU NOs count: {len(sku_nos)}")
print(f"Min SKU NO: {min(sku_nos)}, Max SKU NO: {max(sku_nos)}, Unique SKU NO: {len(set(sku_nos))}")

# Check duplicate SKU CODE
sku_codes = [x['sku_code'] for x in parsed_skus]
print(f"Unique SKU CODE: {len(set(sku_codes))}")

# Check missing fields
missing_report = []
for sku in parsed_skus:
    for field in ['collection', 'fabric', 'category', 'type', 'color', 'size', 'sku_no', 'sku_code', 'sku_name', 'marketplace_default_price', 'marketplace_final_price']:
        if not sku[field] and sku[field] != 0:
            missing_report.append((sku['sku_no'], sku['sku_code'], field))

print(f"Total missing fields: {len(missing_report)}")
if missing_report:
    print(f"Sample missing: {missing_report[:10]}")

# Distinct entities
collections = sorted(list(set(x['collection'] for x in parsed_skus)))
categories = sorted(list(set(x['category'] for x in parsed_skus)))
fabrics = sorted(list(set(x['fabric'] for x in parsed_skus)))
types = sorted(list(set(x['type'] for x in parsed_skus)))
colors = sorted(list(set(x['color'] for x in parsed_skus)))
sizes = sorted(list(set(x['size'] for x in parsed_skus)))

print("\n--- Summary ---")
print(f"Collections ({len(collections)}): {collections}")
print(f"Categories ({len(categories)}): {categories}")
print(f"Fabrics ({len(fabrics)}): {fabrics}")
print(f"Types ({len(types)}): {types}")
print(f"Colors ({len(colors)}): {colors}")
print(f"Sizes ({len(sizes)}): {sizes}")

# Grouping by Collection + Type + Color
from collections import defaultdict
groups = defaultdict(list)
for sku in parsed_skus:
    group_key = (sku['collection'], sku['type'], sku['color'])
    groups[group_key].append(sku)

print(f"\nTotal product groups (Collection + Type + Color): {len(groups)}")

# Also test grouping by (Collection, Type) vs (Collection, Type, Color)
prod_groups_by_type = defaultdict(list)
for sku in parsed_skus:
    prod_groups_by_type[(sku['collection'], sku['type'])].append(sku)

print(f"Total product groups (Collection + Type): {len(prod_groups_by_type)}")

# Let's inspect the instructions on grouping:
# Product grouping rule from user instructions:
# "A product should generally be identified using:
# COLLECTION + TYPE/ITEM + COLOR
# while preserving: FABRIC, CATEGORY, SIZE, SKU as attributes.
# However: DO NOT blindly apply this rule. Inspect the actual dataset.
# If two records with the same collection/type/color represent different products because of another meaningful product identity field, preserve them separately."
