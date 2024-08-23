function copyPixKey() {
    const pixKey = 'athos220206@gmail.com';
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada: ' + pixKey);
    }).catch(err => {
        alert('Erro ao copiar chave PIX: ' + err);
    });
}