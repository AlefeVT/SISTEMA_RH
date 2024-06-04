"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
    return (
        <div className="flex flex-col h-screen">

            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950">

                <div className="flex-1 grid grid-cols-2 gap-8 p-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hora de entrada</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" size="lg">
                                {/* <PlusIcon className="h-6 w-6" /> */}
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hora de saída</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" size="lg">
                                {/* <MinusIcon className="h-6 w-6" /> */}
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-1 p-8 mb-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registros de horas de funcionários</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                       
                                        <TableHead>Hora de entrada</TableHead>
                                        <TableHead>Hora de saída</TableHead>
                                        <TableHead>Total de Horas</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>9:00 AM</TableCell>
                                        <TableCell>5:30 PM</TableCell>
                                        <TableCell>8.5 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8:30 AM</TableCell>
                                        <TableCell>6:00 PM</TableCell>
                                        <TableCell>9 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10:00 AM</TableCell>
                                        <TableCell>4:45 PM</TableCell>
                                        <TableCell>6.75 horas</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}
