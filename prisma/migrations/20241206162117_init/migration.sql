-- CreateTable
CREATE TABLE "Base" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Base_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Relations" (
    "slug" TEXT NOT NULL,
    "person" TEXT[],
    "relation_type" TEXT NOT NULL,

    CONSTRAINT "Relations_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Names" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT,
    "note" TEXT,

    CONSTRAINT "Names_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Urls" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_partners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_partners_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_siblings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_siblings_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_lineage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_lineage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Base_slug_key" ON "Base"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Relations_slug_key" ON "Relations"("slug");

-- CreateIndex
CREATE INDEX "_partners_B_index" ON "_partners"("B");

-- CreateIndex
CREATE INDEX "_siblings_B_index" ON "_siblings"("B");

-- CreateIndex
CREATE INDEX "_lineage_B_index" ON "_lineage"("B");

-- AddForeignKey
ALTER TABLE "Relations" ADD CONSTRAINT "Relations_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Base"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Names" ADD CONSTRAINT "Names_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Base"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Urls" ADD CONSTRAINT "Urls_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Base"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_partners" ADD CONSTRAINT "_partners_A_fkey" FOREIGN KEY ("A") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_partners" ADD CONSTRAINT "_partners_B_fkey" FOREIGN KEY ("B") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_siblings" ADD CONSTRAINT "_siblings_A_fkey" FOREIGN KEY ("A") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_siblings" ADD CONSTRAINT "_siblings_B_fkey" FOREIGN KEY ("B") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_lineage" ADD CONSTRAINT "_lineage_A_fkey" FOREIGN KEY ("A") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_lineage" ADD CONSTRAINT "_lineage_B_fkey" FOREIGN KEY ("B") REFERENCES "Base"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
