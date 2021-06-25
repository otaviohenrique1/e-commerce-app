import 'package:flutter/material.dart';
import 'package:mobile_flutter/shared/campo/campo_widget.dart';

class UsuarioCadastro extends StatefulWidget {
  const UsuarioCadastro({Key? key}) : super(key: key);

  @override
  _UsuarioCadastroState createState() => _UsuarioCadastroState();
}

class _UsuarioCadastroState extends State<UsuarioCadastro> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cadastro'),
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: Form(
          child: ListView(
            children: [
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
              Campo(),
            ],
          ),
        ),
      ),
    );
  }
}
