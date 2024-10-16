const baseUrl = "http://localhost:3000/cartoes"; 

export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar cartões');
        }
        const data = await response.json(); 
        return data.cartoes; 
    } catch (e) {
        console.error('Erro ao buscar cartões:', e);
        throw e; 
    }
}

export async function excluirCartao(index) {
    try {
        const response = await fetch(`${baseUrl}/${index}`, {  
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir cartão');
        }
        await buscarCartoes(); 
    } catch (e) {
        console.error('Erro ao excluir cartão:', e);
        throw e; 
    }
}

export async function cadastrarCartao(nome, valor, link) {
    try {
        const response = await fetch(baseUrl, {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                imagem: link,
            }),
        });
        if (!response.ok) {
            throw new Error('Erro ao cadastrar cartão');
        }
        await buscarCartoes();  
    } catch (e) {
        console.error('Erro ao cadastrar cartão:', e);
        throw e; 
    }
}
