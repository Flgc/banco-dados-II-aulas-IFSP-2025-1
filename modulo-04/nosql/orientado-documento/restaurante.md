# Este documento demonstra a reescrita da modelagem do banco de dados `restaurante` antes criada no PostgreSQL para o MongoDB. 

## 🗂️ Entidades demotra a reescrita dde Dados Relacional

* `vendas`
* `funcionarios`
* `mesas`
* `produtos`

---

## antes criada no PostgreSQL 📦 Modelagem MongoDB
 principais da tabela:**
 * `_id`: String (Chave Primária, equivalente a `id` da tabela `vendas`).
 * `total`: Decimal (venda_total).
 * `desconto`: Decimal (venda_desconto).
 * `situacao`: String (venda_situacao).
 * `data_criacao`: Date (venda_data_criacao).
 * `data_atualizacao`: Date (venda_data_atualizacao).

### 📁 2. Coleção `funcionario`
    ```json
    "funcionario": {
      "id_funcionario": 1, // ni_funcionario da tabela relacional
      "nome": "Carlos Silva",
      "cargo": "Garçom",
      "comissao_percentual": 5.00
    }
    ```

### 📁 3. Coleção `mesas`
    ```json
    "mesa": {
      "id_mesa": 1, // id da tabela relacional
      "situacao_mesa": "A"
    }
    ```

*   **`itens` foi incorporado `itens_vendas` e dados denormalizados de `produtos`:**
    ```json
    "itens": [
      {
        "id_item": 1, // id de itens_vendas
        "produto": {
          "id_produto": 48, // item_venda_produto_id
          "nome": "Produto X", // produto_nome denormalizado
          "valor_unitario_produto": 17.00 // produto_valor denormalizado
        },
        "quantidade": 1,
        "valor_total_item": 17.00
      }
    ]
    ```

**Documento `venda`:**
```json
{
  "_id": 1,
  "total": 181.00,
  "desconto": 0.00,
  "situacao": "A",
  "data_criacao": ISODate("2025-01-02T20:30:00Z"),
  "data_atualizacao": ISODate("2025-01-02T20:30:00Z"),
  "funcionario": {
    "id_funcionario": 1,
    "nome": "Carlos Silva",
    "cargo": "Garçom",
    "comissao_percentual": 5.00
  },
  "mesa": {
    "id_mesa": 1,
    "situacao_mesa": "A"
  },
  "itens": [
    {
      "id_item": 1,
      "produto": {
        "id_produto": 48,
        "nome": "Café Espresso",
        "valor_unitario_produto": 17.00
      },
      "quantidade": 1,
      "valor_total_item": 17.00
    },
    {
      "id_item": 2,
      "produto": {
        "id_produto": 21,
        "nome": "Pão de Queijo",
        "valor_unitario_produto": 7.00
      },
      "quantidade": 1,
      "valor_total_item": 7.00
    }
  ]
}
```

### 📁 4. Coleção `produtos`

* **Campos principais da tabela:**
  * `_id`: String (Chave Primária, equivalente a `id` da tabela `produtos`).
  * `nome`: String (produto_nome).
  * `valor`: Decimal (produto_valor).
  * `situacao`: String (produto_situacao).
  * `data_criacao`: Date (produto_data_criacao).
  * `data_atualizacao`: Date (produto_data_atualizacao).

**Documento `produto`:**
```json
{
  "_id": 1,
  "nome": "Pizza Calabresa",
  "valor": 29.90,
  "situacao": "A",
  "data_criacao": ISODate("2025-01-01T00:00:00Z"),
  "data_atualizacao": ISODate("2025-01-01T00:00:00Z")
}
```

### 📁 5. Coleção `funcionarios`

* **Campos principais da tabela:**
  * `_id`: String (Chave Primária, equivalente a `id` da tabela `funcionarios`).
  * `nome`: String (funcionario_nome).
  * `situacao`: String (funcionario_situacao).
  * `comissao_percentual`: Decimal (funcionario_comissao).
  * `cargo`: String (funcionario_cargo).
  * `data_criacao`: Date (funcionario_data_criacao).
  * `data_atualizacao`: Date (funcionario_data_atualizacao).

*   **`historico_comissoes` foi incorporado dados da tabela `comissoes`:**
    ```json
    "historico_comissoes": [
      {
        "id_comissao": 1, // id de comissoes
        "valor_comissao": 15.00,
        "situacao_comissao": "A",
        "data_registro": ISODate("2025-01-05T10:00:00Z")
      }
    ]
    ```

**Documento `funcionario`:**
```json
{
  "_id": 1,
  "nome": "Carlos Silva",
  "situacao": "A",
  "comissao_percentual": 5.00,
  "cargo": "Garçom",
  "data_criacao": ISODate("2025-01-01T00:00:00Z"),
  "data_atualizacao": ISODate("2025-01-01T00:00:00Z"),
  "historico_comissoes": [
    {
      "id_comissao": 1,
      "valor_comissao": 8.00,
      "situacao_comissao": "A",
      "data_registro": ISODate("2025-01-03T14:30:00Z")
    }
  ]
}
```

### 📁 6. Coleção `mesas`

* **Campos principais da tabela:**
  * `_id`: String (Chave Primária, equivalente a `id` da tabela `mesas`).
  * `situacao`: String (mesa_situacao).
  * `data_criacao`: Date (mesa_data_criacao).
  * `data_atualizacao`: Date (mesa_data_atualizacao).

**Documento `mesa`:**
```json
{
  "_id": 1,
  "situacao": "A",
  "data_criacao": ISODate("2025-01-01T00:00:00Z"),
  "data_atualizacao": ISODate("2025-01-01T00:00:00Z")
}
```