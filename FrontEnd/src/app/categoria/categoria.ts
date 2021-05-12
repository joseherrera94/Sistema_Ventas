export interface categoriaDTO{
    nombre: string;
    sn_activo:Boolean;
    foto: string;
}

export interface crearcategoriaDTO{
    nombre: string;
    sn_activo:Boolean;
    foto: File;
}