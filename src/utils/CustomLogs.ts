export default class Log {
	public static info = (args: any) =>
		console.log(
			'\x1b[36m%s\x1b[0m',
			`[${new Date().toLocaleString()}] [INFO]`,
			args
		)

	public static error = (args: any) =>
		console.log(
			'\x1b[31m',
			`[${new Date().toLocaleString()}] [ERROR]`,
			args
		)
}
