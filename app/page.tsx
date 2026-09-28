"use client"
import Link from "next/link";
import { useEffect, useState } from "react";




export default function Home() {

    const[nome, setNome] = useState("")
    const[preco, setPreco] = useState("")
    
    

  async function cadastrarProduto(e:any) {
    e.preventDefault 

    try {
      const response = await fetch("http://localhost:3001/produtos",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"  
            },
            body:JSON.stringify({
                nome,
                preco
            })
        })
        if(response.ok){
          alert("Deu certo cadastrar! 👍")
        }
    } catch (error) {
        console.log(error)
        alert("Não deu certo cadastrar! 👎")
    }
  
  }


  return (
     <main className="mih-h-screen bg-gray-700 flex items-center justify-center ">
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide text-orange-500">
      TechStore
    </h1>
      <div className="mx-auto max-w-x1 rounded-lg bg-gray-900 p-8 shadow">
                <h1 className=" mb-6 text-3x1 font-bold">Cadastrar Produto</h1>
                <form onSubmit={cadastrarProduto} className="space-y-5">
                    <div>
                        <label>Nome</label>
                        <input type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder=""
                        className="w-full rounded border p-3"/>
                    </div>

                     <div>
                        <label>Preço</label>
                        <input type="text"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder=""
                        className="w-full rounded border p-3"/>
                    </div>

                    <button

                    type="submit"

                    className="w-full rounded bg-orange-500 py-3 font-semibold text-white hover:bg-amber-600 cursor-pointer">

                        Cadastrar Produto

                    </button>

                </form>

            </div>

              <Link href="/consultar" className="w-full max-w-xl">
      <button className="w-full text-center text-sm text-gray-300 hover:text-orange-400 font-medium py-2 transition-colors underline cursor-pointer">
        Quer saber como está o estoque? Clique aqui para listar
      </button>
    </Link>

     </main>
  );
}
