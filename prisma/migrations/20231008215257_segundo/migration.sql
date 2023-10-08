-- CreateTable
CREATE TABLE `usuarios` (
    `user_id` VARCHAR(191) NOT NULL,
    `user_nome` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_senha` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filmes` (
    `filmes_id` VARCHAR(191) NOT NULL,
    `filmes_titulo` VARCHAR(191) NOT NULL,
    `filmes_diretor` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `campoGeneroId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`filmes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genero` (
    `genero_id` VARCHAR(191) NOT NULL,
    `genero_nome` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`genero_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `filmes` ADD CONSTRAINT `filmes_campoGeneroId_fkey` FOREIGN KEY (`campoGeneroId`) REFERENCES `genero`(`genero_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
