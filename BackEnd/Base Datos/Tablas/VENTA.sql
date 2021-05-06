USE BD_Sistema_Ventas
GO
IF OBJECT_ID('VENTA') IS NOT NULL
	DROP TABLE VENTA
GO
CREATE TABLE VENTA
(
	ID_VENTA		INT				NOT NULL IDENTITY(1,1) PRIMARY KEY ,
	IVA				NUMERIC(18,2)	NOT NULL,
	TOTAL			NUMERIC(18,2)	NOT NULL,
	FECHA_VENTA		SMALLDATETIME	NOT NULL,
	ESTADO_VENT		INT				NOT NULL, --1-EXITOSO,2-PENDIENTE
	USUARIO			VARCHAR(50)		NOT NULL,
	ID_PEDIDO		INT				NOT NULL,
	
	--CONSTRAINT FK_ID_PEDIDO FOREIGN KEY (ID_PEDIDO) REFERENCES PEDIDO (ID_PEDIDO),
	
	--CONSTRAINT FK_USUARIO FOREIGN KEY (USUARIO) REFERENCES USUARIO (USUARIO)
)
GO
CREATE INDEX IDX_VENTA ON VENTA (ID_VENTA)
GO
