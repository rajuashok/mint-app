declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    namespace NodeJS {
        interface Global {
            prisma: any
        }
    }
}