(async () => {
    const {value: pais} = await Swal.fire({
        title: "Bienvenido",
        text: "Selecciona tu país",
        imageUrl: "img/model1.jpg",
        imageHeight: "auto",
        imageWidth: "25rem",
        confirmButtonText: "Seleccionar",
        footer: "Visita tu tienda más cercana",
        width: "40%",
        padding: "1rem",
        backdrop: "true",
        position: "center",
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        input: "select",
        inputPlaceholder: "País",
        inputValue: "",
        confirmButtonColor: '#3E60E9',
        inputOptions:{
            argentina: "Argentina",
            chile: "Chile",
            colombia: "Colombia",
            espania: "España",
            paraguay: "Paraguay",
            mexico: "México",
            uruguay: "Uruguay"
        }
    });

    if(pais){
        Swal.fire({
            title: `Bienvenido a Adidas ${pais.charAt(0).toUpperCase() + pais.slice(1)}`,
            confirmButtonColor: '#3E60E9'
        });
    }
})()



