function carregarProfissionais() {
    fetch('http://localhost:8080/user/all')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados da API');
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.querySelector('#tabelaprofissionais tbody');
        // Limpa o conteúdo da tabela antes de adicionar os novos dados
        tableBody.innerHTML = '';
        // Loop pelos dados recebidos e adiciona-os à tabela
        data.forEach(profissional => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${profissional.id}</td>
                <td>${profissional.username}</td>
                <td>${profissional.cpf}</td>
                <td>${profissional.email}</td>
                <td>${profissional.datanascimento}</td>
                <td>${profissional.telefone}</td>
                <td>${profissional.titulo}</td>
                <td>
                    <button onclick="detalhesUsuario(${profissional.id}, '${profissional.username}','${profissional.password}' ,
                     '${profissional.cpf}', '${profissional.email}', '${profissional.datanascimento}', '${profissional.telefone}',
                      '${profissional.titulo}', '${profissional.status.id}', '${profissional.status.datavisto}', '${profissional.status.dataregistro}',
                       '${profissional.status.status}', '${profissional.status.codigounico}', '${profissional.status.tipocadastro}')">Detalhes</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        console.log("Deu certo!");
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));
}

function detalhesUsuario(id, username, password, cpf, email, datanascimento, telefone, titulo, idStatus, datavistoStatus, dataregistroStatus, statusStatus, codigounicoStatus, tipocadastroStatus ) {
    // Seleciona os elementos do modal e atualiza seu conteúdo com os dados do profissional
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="close" onclick="fecharModal()">&times;</span>
        <p>ID: ${id}</p>
        <p>Usuário: ${username}</p>
        <p>Tipo de Cadastro: ${tipocadastroStatus}</p>
        <p>CPF: ${cpf}</p>
        <p>Email: ${email}</p>
        <p>Data de Nascimento: ${datanascimento}</p>
        <p>Telefone: ${telefone}</p>
        <p>Título: ${titulo}</p>
        <p>Status: ${statusStatus}</p>
        <p>Data Visto: ${datavistoStatus}</p>
        <p>Data Registro: ${dataregistroStatus}</p>
        <p>Código Único: ${codigounicoStatus}</p>
        <button onclick="registrarVisar('${id}','${idStatus}','${tipocadastroStatus}','${datavistoStatus}','${dataregistroStatus}','${statusStatus}','${codigounicoStatus}')">Registrar/Visar</button>
        <button onclick="cancelar('${id}','${idStatus}','${tipocadastroStatus}','${statusStatus}')">Cancelar Registro</button>
    `;
    
    // Abre o modal
    abrirModal();
}

function fecharModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function abrirModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function registrarVisar(id, idStatus, tipocadastroStatus, datavistoStatus, dataregistroStatus, statusStatus, codigounicoStatus) {
    const confirmation = confirm("Deseja realmente alterar o status para ATIVO e registrar a ação?");
    
    if (tipocadastroStatus==='REGISTRO'){
		dr = new Date().toLocaleString()
		dv = ''
	} else {
		dr = ''
		dv = new Date().toLocaleString()
	}
    
    if (confirmation) {
        fetch('http://localhost:8080/status/' + idStatus, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
				datavisto: dv,
				tipocadastro: tipocadastroStatus,
				dataregistro: dr,
				status: 'ATIVO',
				codigounico:'',
				usuario: {
					id: id
				}
				
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao registrar/visar usuário');
            }
            alert("Usuário registrado/visado com sucesso!");
            // Atualiza a tabela de profissionais
            location.reload();
            carregarProfissionais();
        })
        .catch(error => console.error('Erro ao registrar/visar usuário:', error));
    }
}

function cancelar(id, idStatus, tipocadastroStatus, statusStatus) {
    const confirmation = confirm("Deseja realmente cancelar o registro deste usuário?");
    
    if (tipocadastroStatus === 'REGISTRO'){
	    if (confirmation) {
	        fetch('http://localhost:8080/status/' + idStatus, {
	            method: 'PUT',
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify({
	                tipocadastro: 'CANCELADO',
	                usuario: {
						id: id
					}
	            })
	        })
	        .then(response => {
	            if (!response.ok) {
	                throw new Error('Erro ao cancelar usuário');
	            }
	            alert("Usuário cancelado com sucesso!");
	            // Atualiza a tabela de profissionais
	            location.reload();
	            carregarProfissionais();
	        })
	        .catch(error => console.error('Erro ao cancelar usuário:', error));
	    }
	} else {
		alert("Operação não efetuda, o seu tipo de cadastro é VISTO e não REGISTRO")
	}
    
}

// Chama a função ao carregar a página para preencher a tabela
window.onload = carregarProfissionais;
