
import image1 from './image/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg';
import image2 from './image/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg';
import image3 from './image/shiromani-kant-mo3FOTG62ao-unsplash.jpg';
function Landingpage(){
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} height={"600px"} class="d-block w-100 " alt="image1"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The Book Thief</h5>
        <p>Une histoire touchante et émouvante sur une jeune fille en Allemagne nazie qui découvre le pouvoir des livres pour échapper à la réalité.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src={image2} height={"600px"} class="d-block w-100 " alt="image2"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The Hunger Games</h5>
        <p>Un roman d'aventure palpitant sur une adolescente qui se bat pour sa survie dans une compétition mortelle dans une société dystopique.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  height={"600px"} src={image3} class="d-block w-100" alt="image3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The Catcher in the Rye</h5>
        <p> Un classique de la littérature américaine qui suit un adolescent rebelle alors qu'il se confronte à la société adulte et cherche à trouver sa place dans le monde.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
)
}
export default Landingpage