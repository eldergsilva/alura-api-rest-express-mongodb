import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req,res){
        try {
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)  
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - falha ao listar Autor`}) 
        }        
    };

    static async listarAutorPorID(req,res){
        try { 
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)  
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - falha ao listar autor`}) 
        }        
    };
    

    static async cadastrarAutor(req,res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message:"Criado com sucesso",autor:novoAutor} )
        } catch (erro) {
           res.status(500).json({message:`${erro.message} - falha ao cadastrar Autor`}) 
        }
    }

    static async atualizarAutor (req,res){
        try {
           const id = req.params.id;
           await autor.findByIdAndUpdate(id,req.body);
           res.status(200).json({message:"autor atualizado"})  
        } catch (erro) {             
            res.status(500).json({message:`${erro.message} - falha ao atualizar Autor`}) 
           ; 
        }        
    };
    static async excluirAutor (req,res){
        try {
           const id = req.params.id;
           await autor.findByIdAndDelete(id)
           res.status(200).json({message:`autor excluido com sucesso`})  
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - falha ao excluir autor`}) 
        }        
    };    


};


export default AutorController;
