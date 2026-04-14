import React, { useEffect, useState } from "react";

function Maps() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // 1. Verifica se o script já existe para não carregar duplicado
        const existingScript = document.getElementById('google-maps-script');

        if (!existingScript) {
            const script = document.createElement('script');
            // Usando a chave da variável de ambiente que criamos!
            script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API_KEY}&libraries=maps&v=beta`;
            script.id = 'google-maps-script';
            script.async = true;
            script.defer = true;
            script.onload = () => setIsLoaded(true);
            document.body.appendChild(script);
        } else {
            setIsLoaded(true);
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            {isLoaded ? (
                /* Nota para os alunos: 'gmp-map' é um Web Component. 
                   O React pode emitir um aviso no console sobre tags desconhecidas, 
                   mas ele irá renderizar normalmente se o script estiver carregado.
                */
                <gmp-map
                    center="-22.9155546,-43.2333981"
                    zoom="18"
                    map-id="DEMO_MAP_ID"
                    style={{ height: '100%', display: 'block' }}
                ></gmp-map>
            ) : (
                <div style={styles.skeleton}>Carregando mapa...</div>
            )}
        </div>
    );
};

const styles = {
    skeleton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
    }

}
export default Maps;