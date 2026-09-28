"use client"
import link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto{
    id:number
    nome:string,
    preco:number
    
}

export default function VerProdutosPage(){

     const [produtos, setProdutos]= useState<Produto[]>([])
     const [loading, setLoading]= useState(true)



async function listarProdutos(){


    try {
        const response = await fetch("http://localhost:3001/produtos")

        if(!response.ok){
            throw new Error("Erro ao listar produtos")
        }
        const data = await response.json()

        setProdutos(data)

    } catch (error) {
        console.log("Erro:",error)
    }finally{
        setLoading(false)
    }
}
   
     
    useEffect(()=>{
        listarProdutos()
    })

 return (
    <main className="p-8 mih-h-screen bg-gray-800">
      <h1 className="mb-6 text-3xl font-bold">
        Página
      </h1>

      {loading ? (<p>Carregando produtos...</p>) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (

            
            <div
              key={produto.id}
              className="rounded-lg border p-4 shadow"
            >
              

              <h2 className="mt-3 text-xl font-semibold">
                {produto.nome}
              </h2>


              <p className="mt-2 text-lg font-bold text-green-600">
                R$ {Number(produto.preco).toFixed(2)}
              </p>

              <button
                className="mt-4 w-full cursor-pointer rounded bg-orange-500 py-2 text-white hover:bg-amber-700"
              >
               Listar produtos
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

