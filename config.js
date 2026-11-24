// Mods RBT - ligação com o Firebase (projeto mods-rbt).
// Esses dados não são senha: todo site com Firebase deixa eles públicos. Quem protege são as regras do Firestore.
window.RBT_FIREBASE = {
  apiKey: "AIzaSyBH540lMNFz5jeiscPKoBovl9m5ZLLKLvU",
  authDomain: "mods-rbt.firebaseapp.com",
  projectId: "mods-rbt",
  appId: "1:418777657980:web:08caab7326ffd17be8cff9"
};
// Arquivos no Cloudflare R2: a "portaria" (Worker) confere o login e a liberação antes de entregar o mod.
window.RBT_ARQUIVOS = "https://mods-rbt-arquivos.rr-rossato.workers.dev";
