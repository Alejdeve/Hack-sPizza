<script setup>
  // Lógica futura de la factura
</script>

<template>
    <div class="invoice-container">
        <!-- Encabezado de la factura -->
        <div class="invoice-header">
            <h1>Factura</h1>
            <p>HackSPizza</p>
            <p>Tel: 555-555-5555 | Email: contacto@hackspizza.com</p>
        </div>

        <!-- Detalles de la factura -->
        <div class="invoice-details">
            <div>
                <span>Número de Factura:</span> 00123
            </div>
            <div>
                <span>Fecha:</span> 16 de Octubre, 2024
            </div>
        </div>

        <!-- Detalles del cliente -->
        <div class="customer-details">
            <div>
                <span>Cliente:</span> Juan Pérez
            </div>
            <div>
                <span>Dirección:</span> Calle Falsa 123, Ciudad, País
            </div>
        </div>

        <!-- Tabla de productos -->
        <table>
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Masa</td>
                    <td>1</td>
                    <td>$10.00</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    <td>Ingrediente</td>
                    <td>2</td>
                    <td>$2.50</td>
                    <td>$5.00</td>
                </tr>
                <tr>
                    <td>Postre</td>
                    <td>1</td>
                    <td>$3.00</td>
                    <td>$3.00</td>
                </tr>
            </tbody>
        </table>

        <!-- Total de la factura -->
        <div class="total">
            <span class="total-label">Total:</span>
            <span class="total-value">$18.00</span>
        </div>

        <!-- Pie de página de la factura -->
        <div class="footer">
            <p>Gracias por su compra en HackSPizza.</p>
            <p>Visítanos nuevamente.</p>
        </div>
    </div>
</template>

<style scoped>


.invoice-container {
    background-color: #fff;
    padding: 20px;
    max-width: 800px;
    margin: 20px auto; /* Añadido para separar del borde de la pantalla */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.invoice-header {
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
}

.invoice-header h1 {
    margin: 0;
    font-size: 24px;
    color: #ddd;
}

.invoice-details,
.customer-details {
    margin-bottom: 30px;
    color: #ddd;
}

.invoice-details div,
.customer-details div {
    margin-bottom: 10px;
    color: #ddd;
}

.invoice-details span,
.customer-details span {
    font-weight: bold;
    color: #ddd;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    color: gray;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f2f2f2;

}

.total {
    text-align: right;
    color: #de0c0c;
}

.total .total-label {
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
}

.total .total-value {
    font-size: 18px;
    color: #ffffff;
}

.footer {
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    margin-top: 20px;
}
</style>