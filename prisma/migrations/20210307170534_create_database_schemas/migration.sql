-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "overview" TEXT NOT NULL,
    "rating_average" DOUBLE PRECISION NOT NULL,
    "ageRange" INTEGER NOT NULL,
    "original_language" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "cast" TEXT[],
    "duration" INTEGER NOT NULL,
    "gender" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteAt" TIMESTAMP(3),
    "movieId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
