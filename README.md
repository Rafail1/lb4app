Table user {
  id int [primary key]
  active int
  first_name varchar
  last_name varchar
  username varchar
  photo_url varchar
  auth_date varchar
  hash varchar
}
Table role {
   id varchar [primary key]
   description varchar
}
Table user_role {
   id int [primary key]
   user_id int [ref: > user.id]
   role_id string [ref: > role.id]
}
Table bot {
  id int [pk]
  active int
  secret varchar [unique]
  user_id int [ref: > user.id]
}
Table client_field {
  id int [pk]
  active int
  field varchar
  type varchar
  remember int
  use_for_order int
  sort varchar
  bot_id int [ref: > bot.id]
}

Table client {
  id int [primary key]
}
Table client_field_value {
  id int [pk]
  value varchar
  client_id int [ref: > client.id]
  order_field_id int [ref: > client_field.id]
}
Table order_client_field_value {
  id int [pk]
  order_id int [ref: > order.id]
  client_field_value_id int [ref: > client_field_value.id]
}
Table order {
  id int [pk]
  bot_id int [ref: > bot.id]
  client_id int [ref: > client.id]
  status varchar
  delivery_id int [ref: > delivery.id]
  created_at varchar [note: "When order created"]
}
Table block {
  id int [primary key]
  title varchar
}
Table item {
  id int [pk]
  block_id int [ref: > block.id]
  active int
  title varchar
  category_id int [ref: > category.id]
  type int
  price int
  status varchar
  created_at varchar
}
Table order_item {
  order_id int [ref: > order.id]
  quantity int
  item_id int [ref: > item.id]
}
Table item_field_value {
  id int [primary key]
  item_field_id int [ref: > item_field.id]
  value varchar
}
Table item_field {
  id int [primary key]
  bot_id int [ref: > bot.id]
  title varchar
}


Table item_button {
  id int [primary key]
  item_id int [ref: > item.id]
  button_id int [ref: > button.id]
}
Table some_to_file {
  id int [primary key]
  item_id int [ref: > item.id]
  category_id int [ref: > category.id]
  button_id int  [ref: > button.id]
  file_id int [ref: > file.id]
}
Table button {
  id int [primary key]
  active int
  title varchar
}


Table exchange {
  id int [primary key]
  active int
  title varchar [unique]
  params varchar  [note: "array"]
}

Table bot_exchange {
  id int [primary key]
  active int
  exchange_id int [ref: > exchange.id]
  bot_id int [ref: > bot.id]
  params varchar  [note: "Object k=>v (категории), комплекты (что делать с комплектами), склады"]
  shedule varchar
}

Table category {
  id int [primary key]
  active int
  bot_id int [ref: > bot.id]
  title varchar
  parent_id int [ref: > category.id]
}

Table file {
  id int [primary key]
  bot_id int [ref: > bot.id]
  path varchar
}

Table delivery_field {
  id int [primary key]
  delivery_id int [ref: > delivery.id]
}

Table delivery_field_value {
  id int [primary key]
  delivery_field_id int [ref: > delivery_field.id]
  value varchar
}

Table delivery {
  id int [primary key]
  title varchar
  properties varchar
}

Table pay_type {
  id int [primary key]
  active int
  title varchar
  bot_id int [ref: > bot.id]
}

Table pay_settings {
  id int [primary key]
  pay_type_id int [ref: > pay_type.id]
  settings varchar
}

Table subscription {
  id int [primary key]
  client_id int [ref: > client.id]
  category_id int [ref: > category.id]
}

Table mass_send {
  id int [primary key]
  file_id int [ref: > file.id]
  caption varchar
  message varchar
  filter varchar
}

















