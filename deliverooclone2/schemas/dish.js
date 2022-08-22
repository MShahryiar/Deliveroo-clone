export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name:'name',
      type:'string',
      title:'Name of the dish',
      validation:(Rule)=> Rule.required(),
    },
    {
      name:'short_description',
      type:'string',
      title:'Short Description',
      validation:(Rule)=> Rule.max(200),
    },
    {
      name:'price',
      type:'number',
      title:'Price of the Dish (pkr)',
    },
    {
      name:'image',
      type:'image',
      title:'Image of the dish',
    },
  ],
}