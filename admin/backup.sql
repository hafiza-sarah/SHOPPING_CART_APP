PGDMP     #    2    
            }         
   mydatabase %   14.17 (Ubuntu 14.17-0ubuntu0.22.04.1) %   14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16384 
   mydatabase    DATABASE     [   CREATE DATABASE mydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';
    DROP DATABASE mydatabase;
                postgres    false                       0    0    DATABASE mydatabase    ACL     ,   GRANT ALL ON DATABASE mydatabase TO myuser;
                   postgres    false    3349            �            1259    24628    Payment    TABLE     �   CREATE TABLE public."Payment" (
    id text NOT NULL,
    "sessionId" text NOT NULL,
    "userId" text NOT NULL,
    "productIds" text[],
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."Payment";
       public         heap    myuser    false            �            1259    16400    Product    TABLE     �  CREATE TABLE public."Product" (
    id integer NOT NULL,
    title text NOT NULL,
    "isNew" boolean NOT NULL,
    "oldPrice" numeric(65,30) NOT NULL,
    price numeric(65,30) NOT NULL,
    description text NOT NULL,
    category text NOT NULL,
    image text NOT NULL,
    rating integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."Product";
       public         heap    myuser    false            �            1259    16399    Product_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Product_id_seq";
       public          myuser    false    211                       0    0    Product_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;
          public          myuser    false    210            �            1259    24620    User    TABLE     �   CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    name text,
    "googleId" text,
    "githubId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."User";
       public         heap    myuser    false            �            1259    16388    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    myuser    false            o           2604    16403 
   Product id    DEFAULT     l   ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);
 ;   ALTER TABLE public."Product" ALTER COLUMN id DROP DEFAULT;
       public          myuser    false    211    210    211                      0    24628    Payment 
   TABLE DATA           Y   COPY public."Payment" (id, "sessionId", "userId", "productIds", "createdAt") FROM stdin;
    public          myuser    false    213   9                 0    16400    Product 
   TABLE DATA           }   COPY public."Product" (id, title, "isNew", "oldPrice", price, description, category, image, rating, "createdAt") FROM stdin;
    public          myuser    false    211   V                 0    24620    User 
   TABLE DATA           V   COPY public."User" (id, email, name, "googleId", "githubId", "createdAt") FROM stdin;
    public          myuser    false    212   ?#                 0    16388    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          myuser    false    209   �#                  0    0    Product_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Product_id_seq"', 20, true);
          public          myuser    false    210            }           2606    24635    Payment Payment_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Payment"
    ADD CONSTRAINT "Payment_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Payment" DROP CONSTRAINT "Payment_pkey";
       public            myuser    false    213            v           2606    16408    Product Product_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public            myuser    false    211            {           2606    24627    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            myuser    false    212            t           2606    16396 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            myuser    false    209            ~           1259    24639    Payment_sessionId_key    INDEX     [   CREATE UNIQUE INDEX "Payment_sessionId_key" ON public."Payment" USING btree ("sessionId");
 +   DROP INDEX public."Payment_sessionId_key";
       public            myuser    false    213            w           1259    24636    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            myuser    false    212            x           1259    24638    User_githubId_key    INDEX     S   CREATE UNIQUE INDEX "User_githubId_key" ON public."User" USING btree ("githubId");
 '   DROP INDEX public."User_githubId_key";
       public            myuser    false    212            y           1259    24637    User_googleId_key    INDEX     S   CREATE UNIQUE INDEX "User_googleId_key" ON public."User" USING btree ("googleId");
 '   DROP INDEX public."User_googleId_key";
       public            myuser    false    212                       2606    24640    Payment Payment_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Payment"
    ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public."Payment" DROP CONSTRAINT "Payment_userId_fkey";
       public          myuser    false    213    3195    212                  x������ � �         �  x��Mo�F����Sz	���`���M��@�C�^��J\����(ʯ�PR��5B����������w�$�kvȵJ}V转��>����?��|���>��C�mm���HvʿE�5NU^��G���t�a%��>F����X�:�3me�[��V�Z{��l����!g��K�7Zy��n'�jp�x����Õ�o�Sp��H}A�yuY�.ǃ�f�����	���l4����j]\�nsh��nCE�i�o.�D�ht���Q����^9��rw^���w��]�i*"�"��M�c*xH�tԾAGX�2��#�t6�x�h����L�\��а	�"�)KC��i��w�hȄ��w���q��l6����	�KpA
��$	E�i �E5[Hr�����KZ��x��SL��l��elĔMZ�<ΰ��Oն��~��>�E.�ݮ�,f��I���8+0.(�	��]+��=�d)Ox$����Kc�@DB�� ��2"tJ$+�����,�]�=*\b�ǂ��K�։��QF�d]�k��Lb��0�+i~���S�]�C��5φ�۵��f�q>5�kp���ɀ�焄C�����I�J�r��bX��o�,�KJ�\e���1��d^cv�v`v\[�H���r܋5��*��Щ���!�H��0���v�Eh�3� 2	~jAq��݂���.�E���<}��[YG$1OXHh��@��}z[�Gձy"�mC��S6�r	�TI`�Ґ�@�Zߨ��S�p�o�o��^�n
K�"y
�\��Q�Bb,���਍W=z�V����۹eLh��I�z�>u����v�oGϩ��ST��h�K�#;���ޭS��l�D����6�����Q�Vز'=�,M�,���L҂%1�����^�A��W�v�׼�:цB8��	�1���.���-Q��娶C1���G�a�Vu�<�	�Y�[#��F0t�eC�_�b�ݤ��ש�тf`c�[��ϰ���n��e�#92���,��z�>��?�h���]�̃=�#���`�)r�~������g�R/8�i�B��wJ�zFd$�y�ż��۲ٙS�.�'��5���
85!�awP�AC�[�&�vaLD4Ԡݙeɗ�7�ܤ>�2��Rʜ	%rFe�0�	����s����9T�$(��4{���.�u������e��o84��$�r�3�$�U��I^��8�x�g[�<f,���0���^�         `   x�-��	�0 г��RҴi�''p/!�X���xYKJ��� 	����P\
w�<�7��.�qkr�^���ӟ�0B���X�}����9�a!�         h  x�m��j\1E�g�"�Ńd]}>�_lK�@�)3��}OK;%! �$���nc�P\�e�1���@T���G�U{6@���+u��9VL�&��R6�)��#�**T)@�l������} ��, !�pg?�����t�χǏ��=�2���<"��$���(�:K'��1Қ���A�Q�j�Gsx�cA�֪q#Dl��%���7X�D��:���A��Ƹ��(�V0D�s�8���v��^�ӗ�[�;HO &�w����Yx�Q�r��0r��[���I�%Dk�M{k��xv���k:VYSp0v�WAx��!�T��95��5//�r׹ݾ�\c/+���,&�����x<��h��     