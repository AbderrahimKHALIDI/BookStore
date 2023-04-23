import { useState, useEffect } from "react";
import bookServices from "../../services/book.service";
import catServices from "../../services/categories.service";
import { useNavigate } from "react-router-dom";
function BookNew() {
  const [name, setName] = useState();
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [auteur, setAuteur] = useState("");
  const [editeur, setEditeur] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectCat, setselectCat] = useState(0);
  const [date_publication, setDatePub] = useState(new Date());
  const [image, setImage] = useState(null);
  console.log(image);

  const formData = new FormData();
  const navigate = useNavigate();
  useEffect(() => {
    getcategorie();
  }, []);
  async function getcategorie() {
    const res = await catServices.getcategories();
    setCategories(res.data);
  }
  async function handelForm(e) {
    e.preventDefault();
    const book = {
      name: name,
      description: description,
      isbn: isbn,
      auteur: auteur,
      editeur: editeur,
      category: categories[selectCat],
      date_publication: date_publication,
    };
    formData.append("book", book);

    if (image) {
      formData.append("image", image);
    }

    bookServices.addBook(formData);

    navigate("/admin/books");
  }
  return (
    <form className={"mt-5"} onSubmit={(e) => handelForm(e)}>
      <h3>Ajouter Votre Livre:</h3>
      <div className={"mb-3"}>
        <label htmlFor={"name"} className={"form-label"}>
          Nom
        </label>
        <input type="text" className={"form-control"} onChange={(e) => setName(e.target.value)} id={"name"}></input>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"description"} className={"form-label"}>
          Description
        </label>
        <input type="text" className={"form-control"} onChange={(e) => setDescription(e.target.value)} id={"description"}></input>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"isbn"} className={"form-label"}>
          isbn
        </label>
        <input type="text" className={"form-control"} onChange={(e) => setIsbn(e.target.value)} id={"isbn"}></input>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"auteur"} className={"form-label"}>
          Auteur
        </label>
        <input type="text" className={"form-control"} onChange={(e) => setAuteur(e.target.value)} id={"auteur"}></input>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"editeur"} className={"form-label"}>
          Editeur
        </label>
        <input type="text" className={"form-control"} onChange={(e) => setEditeur(e.target.value)} id={"editeur"}></input>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"category"} className={"form-label"}>
          Categories
        </label>
        <select value={selectCat} onChange={(e) => setselectCat(e.target.value)} class="form-select">
          {categories.map((elem, index) => {
            return (
              <option key={index} value={index}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={"mb-3"}>
        <label htmlFor={"image"} className={"form-label"}>
          Image
        </label>
        <input className={"form-control"} type="file" onChange={(e) => setImage(e.target.files[0])} id={"image"} />
      </div>
      <div className={"mb-3 cs-form"}>
        <label htmlFor={"date_publication"} className={"form-label"}>
          Date Publication
        </label>
        <input
          type="Date"
          className={"form-control"}
          defaultValue={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDatePub(e.target.value)}
          id={"date_publication"}
        ></input>
      </div>
      <div className={"mb-3"}>
        <input className={"btn btn-success"} type="submit" value={"Enregistrer"} />
        <input className={"btn btn-dark"} type="reset" value={"Annuler"} />
      </div>
    </form>
  );
}
export default BookNew;
