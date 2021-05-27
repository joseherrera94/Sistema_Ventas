export interface categoriaDTO{
    nombre: string;
    sn_activo:Boolean;
    foto: string;
    latitud:number;
    longitud:number;
}

export interface crearcategoriaDTO{
    nombre: string;
    sn_activo:Boolean;
    foto: File;
    descripcion: string;
    latitud:number;
    longitud:number;
}