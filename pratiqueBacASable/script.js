console.log('connecté');
function Title() {
    const title = "Les Jougadous"
    return <h1>{title.toUpperCase()}</h1>
}
function  Nav() {
    const Presentation = "Presentation";
    const Animations = "Animations et Rendez Vous";
    const Répétitions = "Repétitions";
    const RendezVous = "Rendez vous et Horaires";
    const Photos = "Photos";

 return <div>
            <a href="#" >{Presentation}</a>
            <a href="#">{Répétitions}</a>
            <a href="#">{Animations}</a>
            <a href="#">{RendezVous}</a>
            <a href="#">{Photos}</a>
        </div>   

}
ReactDOM.render(<div><Title/><Nav/></div>, document.getElementById('root'));