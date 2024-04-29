import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-wvBGzlYI9NHjVZBq7wbUHtEWrN3AFI8",
  authDomain: "pasarbarokah-56d6c.firebaseapp.com",
  projectId: "pasarbarokah-56d6c",
  storageBucket: "pasarbarokah-56d6c.appspot.com",
  messagingSenderId: "316348641371",
  appId: "1:316348641371:web:5ad38a561e7d73744acf7e",
  measurementId: "G-W3SBB85TF1"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarproduk(){
  const refDokumen = collection(db, "produk");
  const kuery = query(refDokumen, orderBy("nama"));
  const cuplikankuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikankuery.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      harga: dok.data().harga,
      stok: dok.data().stok,
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahProduk(nama,harga,stok) {
  try {
    const dokRef = await addDoc(collection(db,'pembeli'), {
      nama: nama,
      harga: harga,
      stok: stok
    });
    console.log('Berhasil menambah produk' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah pembeli' + e);
  }
}

export async function hapuspembeli(docId){
  await deleteDoc(doc(db, "produk", docId));
}
export async function ubahProduk(docId, nama, alamat, noTlpn) {
  await updateDoc(doc(db, "produk", docId), {
    nama: nama,
    harga: harga,
    setok: setok
  });else {
    }
}
export async function ambilProduk(docId) {
  const docRef = await doc(db, "produk", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}