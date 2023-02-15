import request from 'supertest'
import { app } from '../app'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { prisma } from '../lib/prisma'

describe('Transactions routes', () => {
  beforeAll(async () => {
    app.ready()
  })

  afterAll(async () => {
    app.close()
  })

  beforeEach(async () => {
    await prisma.transactions.deleteMany()
  })

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Transaction test',
      amount: 3000,
      type: 'credit',
    })

    expect(response.statusCode).toEqual(201)
  })

  it('should be able to list all transactions', async () => {
    await request(app.server).post('/transactions').send({
      title: 'Transaction test',
      amount: 3000,
      type: 'credit',
    })

    const response = await request(app.server).get('/transactions')

    expect(response.statusCode).toEqual(200)
    expect(response.body.allTransactions[0]).toHaveProperty('id')
    expect(response.body.allTransactions[0]).toHaveProperty('title')
    expect(response.body.allTransactions[0]).toHaveProperty('created_at')
    expect(response.body.allTransactions[0]).toHaveProperty('amount')
    expect(response.body.allTransactions).toEqual([
      {
        amount: 3000,
        created_at: expect.any(String),
        id: expect.any(String),
        title: 'Transaction test',
      },
    ])
  })

  it('should be able to find a transaction by id', async () => {
    await request(app.server).post('/transactions').send({
      title: 'Transaction test',
      amount: 3000,
      type: 'credit',
    })

    const allTransactions = await request(app.server).get('/transactions')

    const response = await request(app.server).get(
      `/transactions/${allTransactions.body.allTransactions[0].id}`,
    )

    expect(response.statusCode).toEqual(200)
    expect(response.body.transaction).toHaveProperty('id')
    expect(response.body.transaction).toHaveProperty('title')
    expect(response.body.transaction).toHaveProperty('created_at')
    expect(response.body.transaction).toHaveProperty('amount')
    expect(response.body.transaction).toEqual({
      amount: 3000,
      created_at: expect.any(String),
      id: expect.any(String),
      title: 'Transaction test',
    })
  })

  it('should be able to delete a transaction by id', async () => {
    await request(app.server).post('/transactions').send({
      title: 'Transaction test',
      amount: 3000,
      type: 'credit',
    })

    const allTransactions = await request(app.server).get('/transactions')

    const response = await request(app.server).delete(
      `/transactions/${allTransactions.body.allTransactions[0].id}`,
    )

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({})
  })

  it('should be able to update a transaction by id', async () => {
    await request(app.server).post('/transactions').send({
      title: 'Transaction test',
      amount: 3000,
      type: 'credit',
    })

    const allTransactions = await request(app.server).get('/transactions')

    const id = allTransactions.body.allTransactions[0].id

    const response = await request(app.server)
      .patch(`/transactions/${id}`)
      .send({
        title: 'Transaction updated',
        amount: 5000,
      })

    const transaction = await request(app.server).get(`/transactions/${id}`)

    expect(response.statusCode).toEqual(201)
    expect(response.body).toEqual({})
    expect(transaction.body.transaction.amount).toEqual(5000)
    expect(transaction.body.transaction.title).toEqual('Transaction updated')
  })

  it('should be able to get transactions summary', async () => {
    await request(app.server).post('/transactions').send({
      title: 'Credit',
      amount: 3000,
      type: 'credit',
    })

    await request(app.server).post('/transactions').send({
      title: 'Debit',
      amount: 1500,
      type: 'debit',
    })

    const response = await request(app.server).get('/transactions/summary')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('amount')
    expect(response.body.amount).toEqual(1500)
  })
})
