import prisma from "@/config/database";

async function getCode() {
    return await prisma.code.findMany({});
};

async function updateCode(code: number, newCode: number) {
    const updatedCode = await prisma.code.update({
        where: { idCode : code },
        data: { idcode: newCode },
    });

    return updatedCode;
}

const repositoryCode = {
    getCode, updateCode
};

export default repositoryCode;