USE BD_Sistema_Ventas
GO
IF OBJECT_ID('ROL') IS NOT NULL
	DROP TABLE ROL
GO
CREATE TABLE ROL
(
	ID_ROL			INT				NOT NULL PRIMARY KEY ,
	NOMBRE_ROL		VARCHAR(50)		NOT NULL,
	SN_ACTIVO		INT				NOT NULL,
	FEC_CREACION	SMALLDATETIME	NOT NULL
)
GO
CREATE INDEX IDX_ROL ON ROL (NOMBRE_ROL)
GO
