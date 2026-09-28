// function Product() {
//   const [query, setQuery] = useState("");
//   const [cheapOnly, setCheapOnly] = useState(false);
//   const [clicks, setClicks] = useState(0);

//   // Написати useMemo

//   const filtredproducts = useMemo(() => {
//   console.log('фільтрація та сортування')
//   let filter = products.filter(product => {
//     return product.name.toLowerCase().includes(query.toLowerCase())
//   })
//   if (cheapOnly){
//     filter = filter.filter(item => item.price <= 1000)
//   }
//   return filter.sort((a, b) => a.price - b.price)
// }, [query, cheapOnly])




//     )
// }<label>
//   <input 
//     type="checkbox"
//     checked={cheapOnly}
//     onChange={() => setCheapOnly(!cheapOnly)}
//   />
//   Тільки до 1000 грн
// </label>

//    <button onClick={() => setClicks(clicks + 1)}>
//     Clicks: {clicks}
// </button>

// {/* Вивести товари */}
// {filtredproducts.map(product => (
//     <div key=[product.id}>
//         {product.name}
//         {product.price}
//     </div>
// ))}