export default function createTask(title, description) {
    return {
        title,
        description,
        isComplete: false,
        createdAt: new Date().toISOString()
    };
}