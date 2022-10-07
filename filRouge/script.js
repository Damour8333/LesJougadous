function  Header() {

     const Title = "La maison jungle !"
     return <h1>{Title.toUpperCase()}</h1>
};
function Description() {
    return <p>Ici achetez toutes les plantes dont vous avez toujours révez 🌵🌾🌿</p>
    

};
function Cart() {
     const prixDumonstera = 8 ;
     const prixDuLierre = 10;
     const prixDuBouquetDeFleur = 15;
     const total =   prixDumonstera  + prixDuLierre + prixDuBouquetDeFleur;
  return   <div>    
  <h2>Panier</h2>
    <ul>
        <li>Monstera :{prixDumonstera} €</li>
        <li>Lierre: {prixDuLierre} €</li>
        <li>Bouquet de fleurs :{prixDuBouquetDeFleur} €</li>
    </ul>
        Total du panier :{total} €
    </div>
}
//Regroupons notre Titre et notre Description dans une bannière
function Banner() {
    return <div>
        <Header/>
        
        
    </div>
}
// ReactDOM.render(<React.Fragment><Header /><Description/></React.Fragment>, document.getElementById('root'));
ReactDOM.render(<div><Banner/><Cart/></div>, document.getElementById('root'));