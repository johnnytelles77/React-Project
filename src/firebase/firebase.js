import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkDgj_srVVwp6_DhThF91iJkh2UZAHu0g",
  authDomain: "proyecto-react-johnnyt.firebaseapp.com",
  projectId: "proyecto-react-johnnyt",
  storageBucket: "proyecto-react-johnnyt.appspot.com",
  messagingSenderId: "172783036194",
  appId: "1:172783036194:web:64151af57b07bfad43e77b"
}

const app = initializeApp(firebaseConfig)
const bdd = getFirestore()

const prods = [
  {
    title: "Makeup Artist",
    description: "Servicio profesional de maquillaje para cualquier ocasión.",
    price: 50,
    category: "makeup",
    img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-johnnyt.appspot.com/o/makeup1.png?alt=media&token=40497fe3-ef74-4581-b613-e5b5d2a88e42",
    location: "25 millas de distancia",
    datesAvailable: "Feb 21-28",
    stars: 4
  },
  {
    title: "Nail Technician",
    description: "Servicios creativos y estilosos de uñas.",
    price: 40,
    category: "nails",
    img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-johnnyt.appspot.com/o/nail1.png?alt=media&token=1508914c-aff3-4dd7-b01e-38e44dce76cb",
    location: "A 5 km de tu ubicación",
    datesAvailable: "Feb 25-Mar 5",
    stars: 5
  },
  {
    title: "Makeup & Nails Combo",
    description: "Paquete especial que incluye maquillaje y servicios de uñas.",
    price: 80,
    category: "makeup",
    img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-johnnyt.appspot.com/o/makeup2.png?alt=media&token=f318e715-ff45-4358-b1d5-02d67683d941",
    location: "A domicilio",
    datesAvailable: "Mar 1-15",
    stars: 4.5
  },
  {
    title: "Maquillaje para Bodas",
    description: "Servicio exclusivo de maquillaje para eventos de bodas.",
    price: 120,
    category: "makeup",
    img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-johnnyt.appspot.com/o/weeding.png?alt=media&token=83336f30-1d59-4323-9ad1-76e863c1344c",
    location: "Cerca de iglesias y salones de bodas",
    datesAvailable: "Disponible todo el año",
    stars: 5
  },
  {
    title: "Diseños de Uñas Artísticas",
    description: "Uñas artísticas con diseños únicos y personalizados.",
    price: 45,
    category: "nails",
    img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-johnnyt.appspot.com/o/nail%202.png?alt=media&token=ba9b27be-6546-41ca-8d50-5d867236c35c",
    location: "Centro de la ciudad",
    datesAvailable: "Feb 28-Mar 10",
    stars: 4
  }
]

export const createProducts = async () => {
  try {
    for (const prod of prods) {
      const rta = await addDoc(collection(bdd, "productos"), {
        title: prod.title,
        description: prod.description,
        price: prod.price,
        category: prod.category,
        img: prod.img,
        location: prod.location,
        datesAvailable: prod.datesAvailable,
        stars: prod.stars
      })

      console.log(rta)
    }
  } catch (e) {
    console.error(e)
  }
}






// Consultar productos
/* export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"))
  const items = productos.docs.map(prod => ({ ...prod.data(), id: prod.id }))
  console.log(items)
}

getProducts() */



// Consultar productos
/* export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"))
  const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
  return items
} */



export const getProducts = async () => {
  try {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    console.log("Productos recuperados:", items); // Agregar este console log
    return items
  } catch (error) {
    console.error("Error al recuperar productos:", error);
    return [];
  }
}

getProducts()



//Consultar Producto
/* export const getProduct = async (id) => {
  const producto = await getDoc(doc(bdd, "productos", id));
  const item = { ...producto.data(), id: producto.id };
  return item;
}; */


export const getProduct = async (id) => {
  try {
    const productoRef = doc(bdd, "productos", id);
    const productoSnap = await getDoc(productoRef);
    
    if (productoSnap.exists()) {
      const item = { ...productoSnap.data(), id: productoSnap.id };
      return item;
    } else {
      console.log("No se encontró el producto con el ID proporcionado.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};



// Actualizar Producto

export const updateProduct = async (id, info) => {
  await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
  await deleteDoc(doc(bdd, "productos", id))
}

/* deleteProduct("16Sn6rAOiMccnvYjjw4v") */

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
      cliente: cliente,
      items: carrito,
      precioTotal: precioTotal,
      fecha: fecha
  })

  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  return item
}



