//import { api } from "../services/api";
// const api = require('../services/api');

(() => {
    //Cadastro de clientes:

    //Create Cliente
    let btnCreateCliente = document.getElementById('buttonCreateCliente');
    let modalClienteCreate = document.getElementById("modalClienteCreate");
    let divInviClienteCreate = document.getElementById("modalCreateCliente");
    let buttonCancelClienteCreate = document.getElementById("btnCancelarCreateCliente");
    let buttonCadastro = document.getElementById("btnCriarCliente");

    buttonCadastro.onclick = () => {
        createCliente();
    }

    btnCreateCliente.onclick = () => {
        modalClienteCreate.style.display = "flex";
        divInviClienteCreate.style.display = "flex";
    }

    buttonCancelClienteCreate.onclick = () => {
        modalClienteCreate.style.display = "none";
        divInviClienteCreate.style.display = "none";
    }
    //Fim//

    //Get Clientes
    let btnGetCliente = document.getElementById('buttonGetCliente');
    let modalClienteGet = document.getElementById("modalClienteGet");
    let divInviClienteGet = document.getElementById("modalGetCliente");
    let buttonCancelClienteGet = document.getElementById("btnFecharGetClientes");

    btnGetCliente.onclick = () => {
        getClientes().then(() => {
            modalClienteGet.style.display = "flex";
            divInviClienteGet.style.display = "flex";
        });
    }

    buttonCancelClienteGet.onclick = () => {
        modalClienteGet.style.display = "none";
        divInviClienteGet.style.display = "none";
    }
    //Fim//

    //Update Cliente
    let btnUpdateCliente = document.getElementById('buttonUpdateCliente');
    let modalClienteUpdateId = document.getElementById("modalClienteUpdateId");
    let divInviClienteUpdateId = document.getElementById("modalUpdateClienteId");
    let btnCancelarUpdateClienteId = document.getElementById("btnCancelarUpdateClienteId");
    let updateClienteButton = document.getElementById("btnUpdateClienteCreate");

    updateClienteButton.onclick = () => {
        updateCliente();
    }

    btnUpdateCliente.onclick = () => {
        modalClienteUpdateId.style.display = "flex";
        divInviClienteUpdateId.style.display = "flex";
    }

    btnCancelarUpdateClienteId.onclick = () => {
        modalClienteUpdateId.style.display = "none";
        divInviClienteUpdateId.style.display = "none";
    }

    let btnUpdateClienteId = document.getElementById('btnUpdateClienteId');
    let modalClienteUpdateCreate = document.getElementById("modalClienteUpdateCreate");
    let divInviClienteUpdateCreate = document.getElementById("modalUpdateClienteCreate");
    let btnCancelarUpdateClienteCreate = document.getElementById("btnCancelarUpdateClienteCreate");

    btnUpdateClienteId.onclick = () => {
        localStorage.setItem('idUpdateCliente', document.getElementById("inputUpdateCliente").value);
        modalClienteUpdateCreate.style.display = "flex";
        divInviClienteUpdateCreate.style.display = "flex";
    }

    btnCancelarUpdateClienteCreate.onclick = () => {
        modalClienteUpdateCreate.style.display = "none";
        divInviClienteUpdateCreate.style.display = "none";
    }
    //Fim//

    //Delete Cliente
    let btnDeleteCliente = document.getElementById('buttonDeleteCliente');
    let modalClienteDelete = document.getElementById("modalClienteDelete");
    let divInviClienteDelete = document.getElementById("modalDeleteCliente");
    let buttonCancelClienteDelete = document.getElementById("btnCancelarDeleteCliente");
    let buttonDelete = document.getElementById('btnDeleteCliente');

    buttonDelete.onclick = () => {
        localStorage.setItem('idDeleteCliente', document.getElementById("inputDeleteCliente").value);
        deleteCliente();
    }

    btnDeleteCliente.onclick = () => {
        modalClienteDelete.style.display = "flex";
        divInviClienteDelete.style.display = "flex";
    }

    buttonCancelClienteDelete.onclick = () => {
        modalClienteDelete.style.display = "none";
        divInviClienteDelete.style.display = "none";
    }
    //Fim//

    //Cadastro de produtos:

    //Create Produtos
    let btnCreateProduto = document.getElementById('buttonCreateProduto');
    let modalProduto = document.getElementById("modalProdutoCreate");
    let divInviProduto = document.getElementById("modalCreateProduto");
    let buttonCancelProduto = document.getElementById("btnCancelarCreateProduto");
    let buttonCadastroProduto = document.getElementById("btnCriarProduto");

    buttonCadastroProduto.onclick = () => {
        createProdutos();
    }

    btnCreateProduto.onclick = () => {
        modalProduto.style.display = "flex";
        divInviProduto.style.display = "flex";
    }

    buttonCancelProduto.onclick = () => {
        modalProduto.style.display = "none";
        divInviProduto.style.display = "none";
    }
    //Fim//

    //Get Produtos
    let btnGetProduto = document.getElementById('buttonGetProduto');
    let modalProdutoGet = document.getElementById("modalProdutoGet");
    let divInviProdutoGet = document.getElementById("modalGetProduto");
    let buttonCancelProdutoGet = document.getElementById("btnFecharGetProdutos");

    btnGetProduto.onclick = () => {
        getProdutos().then(() => {
            modalProdutoGet.style.display = "flex";
            divInviProdutoGet.style.display = "flex";
        })
    }

    buttonCancelProdutoGet.onclick = () => {
        modalProdutoGet.style.display = "none";
        divInviProdutoGet.style.display = "none";
    }
    //Fim//

    //Update Produtos
    let btnUpdateProduto = document.getElementById('buttonUpdateProduto');
    let modalProdutoUpdateId = document.getElementById("modalProdutoUpdateId");
    let divInviProdutoUpdateId = document.getElementById("modalUpdateProdutoId");
    let btnCancelarUpdateProdutoId = document.getElementById("btnCancelarUpdateProdutoId");
    let updateProdutoButton = document.getElementById("btnUpdateProdutoCreate");

    updateProdutoButton.onclick = () => {
        updateProduto();
    }

    btnUpdateProduto.onclick = () => {
        modalProdutoUpdateId.style.display = "flex";
        divInviProdutoUpdateId.style.display = "flex";
    }

    btnCancelarUpdateProdutoId.onclick = () => {
        modalProdutoUpdateId.style.display = "none";
        divInviProdutoUpdateId.style.display = "none";
    }

    let btnUpdateProdutoId = document.getElementById('btnUpdateProdutoId');
    let modalProdutoUpdateCreate = document.getElementById("modalProdutoUpdateCreate");
    let divInviProdutoUpdateCreate = document.getElementById("modalUpdateProdutoCreate");
    let btnCancelarUpdateProdutoCreate = document.getElementById("btnCancelarUpdateProdutoCreate");

    btnUpdateProdutoId.onclick = () => {
        localStorage.setItem('idUpdateProduto', document.getElementById("inputUpdateProduto").value);
        modalProdutoUpdateCreate.style.display = "flex";
        divInviProdutoUpdateCreate.style.display = "flex";
    }

    btnCancelarUpdateProdutoCreate.onclick = () => {
        modalProdutoUpdateCreate.style.display = "none";
        divInviProdutoUpdateCreate.style.display = "none";
    }

    //Fim//

    //Delete Produtos
    let btnDeleteProduto = document.getElementById('buttonDeleteProduto');
    let modalProdutoDelete = document.getElementById("modalProdutoDelete");
    let divInviProdutoDelete = document.getElementById("modalDeleteProduto");
    let buttonCancelProdutoDelete = document.getElementById("btnCancelarDeleteProduto");
    let buttonDeleteProd = document.getElementById("btnDeleteProduto");

    buttonDeleteProd.onclick = () => {
        localStorage.setItem('idDeleteProduto', document.getElementById("inputDeleteProduto").value);
        deleteProduto();
    }

    btnDeleteProduto.onclick = () => {
        modalProdutoDelete.style.display = "flex";
        divInviProdutoDelete.style.display = "flex";
    }

    buttonCancelProdutoDelete.onclick = () => {
        modalProdutoDelete.style.display = "none";
        divInviProdutoDelete.style.display = "none";
    }
    //Fim//
})();

function getClientes() {
    const element = document.getElementById("cliente");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    return axios.get('http://localhost:3001/api/').then(response => {
        const value = response.data;
        for (var i = 0; i < value.length; i++) {
            const p1 = document.createElement("p");
            p1.innerText = "Id: " + value[i].id;
            const p2 = document.createElement("p");
            p2.innerText = "Nome: " + value[i].nm_cliente;
            const p3 = document.createElement("p");
            p3.innerText = "CPF: " + value[i].nr_cpf;
            const p4 = document.createElement("p");
            p4.innerText = "E-mail: " + value[i].ds_email;
            const p5 = document.createElement("p");
            p5.innerText = "Telefone: " + value[i].nr_telefone;
            p5.innerHTML = "<br>";
            element.appendChild(p1);
            element.appendChild(p2);
            element.appendChild(p3);
            element.appendChild(p4);
            element.appendChild(p5);
        }
    }).catch(error => {
        alert(error);
    });
}

function getProdutos() {
    const element = document.getElementById("produto");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    return axios.get('http://localhost:3001/apiTwo/').then(response => {
        const value = response.data;
        for (var i = 0; i < value.length; i++) {
            const p1 = document.createElement("p");
            p1.innerText = "Id: " + value[i].id;
            const p2 = document.createElement("p");
            p2.innerText = "Descrição: " + value[i].ds_produto;
            const p3 = document.createElement("p");
            p3.innerText = "Valor: " + "R$ " + value[i].vl_produto;
            const p4 = document.createElement("p");
            p4.innerText = "Data de Lançamento: " + value[i].dt_lancamento;
            p4.innerHTML = "<br>";
            element.appendChild(p1);
            element.appendChild(p2);
            element.appendChild(p3);
            element.appendChild(p4);
        }
    }).catch(error => {
        alert(error);
    });
}

function createCliente() {
    const params = {
        "nm_cliente": document.getElementById('inputNomeCliente').value,
        "nr_cpf": document.getElementById('inputCpfCliente').value,
        "ds_email": document.getElementById('inputEmailCliente').value,
        "nr_telefone": document.getElementById('inputTelefoneCliente').value
    }
    axios.post('http://localhost:3001/api/clientes/', params).then(() => {
        alert("Cadastro realizado com sucesso");
        document.getElementById("modalCreateCliente").style.display = "none";
        document.getElementById("modalClienteCreate").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}

function createProdutos() {
    const params = {
        "ds_produto": document.getElementById('inputDescProduto').value,
        "vl_produto": document.getElementById('inputValorProduto').value,
        "dt_lancamento": document.getElementById('inputDtLancamentoProduto').value
    }
    axios.post('http://localhost:3001/apiTwo/produtos/', params).then(() => {
        alert("Cadastro realizado com sucesso");
        document.getElementById("modalProdutoCreate").style.display = "none";
        document.getElementById("modalCreateProduto").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}

function deleteCliente() {
    const id = localStorage.getItem("idDeleteCliente");
    axios.delete(`http://localhost:3001/api/${id}`).then(() => {
        alert("Cliente excluído com sucesso");
        document.getElementById("modalDeleteCliente").style.display = "none";
        document.getElementById("modalClienteDelete").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}

function deleteProduto() {
    const id = localStorage.getItem("idDeleteProduto");
    axios.delete(`http://localhost:3001/apiTwo/${id}`).then(() => {
        alert("Produto excluído com sucesso");
        document.getElementById("modalDeleteProduto").style.display = "none";
        document.getElementById("modalProdutoDelete").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}

function updateCliente() {
    const id = localStorage.getItem("idUpdateCliente");
    const params = {
        "nm_cliente": document.getElementById('inputNomeCliente2').value,
        "nr_cpf": document.getElementById('inputCpfCliente2').value,
        "ds_email": document.getElementById('inputEmailCliente2').value,
        "nr_telefone": document.getElementById('inputTelCliente2').value
    }
    axios.put(`http://localhost:3001/api/${id}`, params).then(() => {
        alert("Cliente alterado com sucesso");
        document.getElementById("modalUpdateClienteCreate").style.display = "none";
        document.getElementById("modalClienteUpdateCreate").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}

function updateProduto() {
    const id = localStorage.getItem("idUpdateProduto");
    const params = {
        "ds_produto": document.getElementById('inputDescProduto2').value,
        "vl_produto": document.getElementById('inputValorProduto2').value,
        "dt_lancamento": document.getElementById('inputDtLancamentoProduto2').value
    }
    axios.put(`http://localhost:3001/apiTwo/${id}`, params).then(() => {
        alert("Produto alterado com sucesso");
        document.getElementById("modalUpdateProdutoCreate").style.display = "none";
        document.getElementById("modalProdutoUpdateCreate").style.display = "none";
    }).catch(error => {
        alert(error);
    })
}